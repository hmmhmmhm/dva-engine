import { Resolver } from './resolver'
import { Inject } from '../language/injector/index'
import { getLogger } from './logger'
import { existsSync } from 'fs'
import packageData from '../../../package.json'

export const Generator = async (
    langs = [
        `kor`,
        `eng`,
    ]
) => {
    /**
     * @description
     * Generator Logger
     */
    const Logger = getLogger()

    Logger.debug(`D.VA ENGINE v${packageData.version}`)
    Logger.debug(`Starting initialization sequence...`)

    if(!existsSync(`${process.cwd()}/bin/release`)){
        await Inject(langs)
        await Resolver(langs)
        Logger.debug(`All generator operations succeeded.`)
    }
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __filename){
        if(typeof process.argv[2] != 'undefined'){
            Generator(process.argv[2].split(','))
        }else{
            Generator()
        }
    }
}catch(e){}