import { collectInterfaceFiles } from './util'
import { getLogger } from './logger'
import { writeFileSync, readFileSync } from 'fs'
import replaceAll from 'string-replace-all'
import { resolve } from 'path'

export interface IFixItem {
    context: string
    fixedContext: string
    indent: number
}

export const createIndent = (indentCount) => {
    let indent = ``
    for(let i=0;i<indentCount;i++) indent += ` `
    return indent
}

export const declarationFix = () => { new Promise(async (promiseResolve, promiseReject) => {

    const Logger = getLogger()

    Logger.debug(`All Declaration will be fixing...`)
    let dtsPath = resolve(`${process.cwd()}/dist/dva.d.ts`)
    let dtsData = String(readFileSync(dtsPath))

    let exportStatements = dtsData.split(`export {\n`)
    exportStatements.shift()

    let fixItems: IFixItem[] = []
    for(let exportStatement of exportStatements){
        let context = exportStatement.split(`}`)[0]
        let contextLines = context.split(`\n`)
        contextLines.pop()
        context = contextLines.join(`\n`)

        let isErrorExist = context.indexOf(`,`) == -1
        if(isErrorExist && contextLines.length < 2) isErrorExist = !isErrorExist
        if(!isErrorExist) continue

        let indent = 0
        for(let ch of contextLines[0].split(``)){
            if(ch == ' '){
                indent++
                continue
            }
            break
        }
        let fixedContext = `${contextLines.join(`,\n`)}`

        let fixItem: IFixItem = {
            context,
            fixedContext,
            indent
        }
        fixItems.push(fixItem)
    }

    //console.log(fixItems)
    Logger.debug(`Founded ${fixItems.length}'s Fixable Error.`)

    // dtsData
    let fixedDTSData = String(dtsData)
    for(let fixItem of fixItems){
        let indent = createIndent(fixItem.indent)
        let endIndent = createIndent(fixItem.indent-2)
        fixedDTSData = replaceAll(
            fixedDTSData,
            `export {\n${fixItem.context}\n${endIndent}}`,
            `export {\n${fixItem.fixedContext}\n${endIndent}}`
        )
    }

    writeFileSync(dtsPath, fixedDTSData)
    Logger.debug(`All Declaration has been fixed.`)
    promiseResolve()
})}

// npm run release
// npm run release:fixxx

// for CLI Command Run
if(`${process.argv[1]}` == __filename) declarationFix()