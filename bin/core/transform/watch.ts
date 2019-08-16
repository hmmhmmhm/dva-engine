import nodeCleanup from 'node-cleanup'
import spawn from 'cross-spawn'
import run from 'tsc-watch/lib/runner'

import { manipulate, detectState, print } from 'tsc-watch/lib/stdout-manipulator'
import { getLogger } from '../generator/logger'

import { loadUserScript } from  './afterSuccess'
const onSuccessCommand = `ts-node "./bin/core/transform/afterSuccess.ts"`
const Logger = getLogger()


import { readFileSync } from 'fs'
import packageData from '../../../package.json'

let firstTime = true

let firstSuccessKiller: (()=> any) | null = null
let successKiller: (()=> any) | null = null
let failureKiller: (()=> any) | null = null

const killProcesses = (killAll) => {
  return Promise.all([
    (killAll && firstSuccessKiller !== null) ? firstSuccessKiller() : null,
    successKiller ? successKiller() : null,
    failureKiller ? failureKiller() : null,
  ])
}

const bin = require.resolve('ttypescript/bin/tsc')
const tscProcess = spawn(bin, ['--watch'])

Logger.debug(`Start main engine operating sequence...`)

tscProcess.stdout.on('data', buffer => {

    const lines = manipulate(buffer)
    print(false, false, lines)

    let isInit = lines.some(line => line.indexOf('Starting compilation in watch mode') != -1)
    if(isInit){
        Logger.debug(`D.VA ENGINE v${packageData.version}`)
        Logger.debug(`Please hold while first transpile.. Processing...`)
        Logger.debug(`(First transpile can take a few seconds or minutes...)`)
    }

    const state = detectState(lines)
    const compilationError = state.compilationError
    const compilationComplete = state.compilationComplete

    if (compilationComplete) {
        killProcesses(false).then(() => {
            if (compilationError) {
                Logger.debug(`Failed initialization sequence.`)
                Signal.emitFail()
            } else {
                Signal.emitSuccess()

                if (firstTime) {
                    firstTime = false
                    loadUserScript()

                } else {
                    loadUserScript()
                }
            }
        })
    }
})

const Signal = {
    send:
        typeof process.send === 'function'
            // @ts-ignore
            ? (...e) => process.send(...e)
            : () => {},

    _successStr:
        'first_success',

    emitSuccess: () => {
        Signal.send(Signal._successStr)
        Signal._successStr = 'subsequent_success'
    },

    emitFail: () => Signal.send('compile_errors'),
}

nodeCleanup((_exitCode, signal) => {
    tscProcess.kill(signal)
    killProcesses(true).then(() => process.exit())

    // don't call cleanup handler again
    nodeCleanup.uninstall()

    return false
})