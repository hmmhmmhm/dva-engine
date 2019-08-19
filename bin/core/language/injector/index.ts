import * as Util from '../../generator/util'
import * as Extractor from '../extractor/extractor'
import * as Injector from './injector'

import FolderLogger from 'folder-logger'
import tempDir from 'temp-dir'

import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'
import replaceAll from 'string-replace-all'

/**
 * @description
 * Injects all comments in the engine files
 * that will be duplicate to release folder.
 * 
 * @param lang 
 */
export const Inject = async (langs: string[] = ['kor'])=>{
    /**
     * @description
     * Generator Logger
     */
    const Logger = new FolderLogger(tempDir)

    for(let lang of langs){
        Logger.debug(`[${lang.toUpperCase()}] Files Initializing...`)

        // Create Inject Path
        let injectPath = `${process.cwd()}/bin/release/${lang}`
        try{ rimraf.sync(injectPath) } catch(e){}
        try{ await fs.promises.mkdir(injectPath, { recursive: true }) } catch(e){}

        // Load Data
        let translationData: Injector.ITraslationData = require(`../data/${lang}.json`)

        // Collect Paths
        let collectPaths = [
            `/interface`,
            `/reformer`,
            `/resolver`,
            `/type`
        ]

        // Collect all interface files
        for(let collectPath of collectPaths){
            await Util.collectInterfaceFiles(

                // Collect Path
                path.resolve(`${process.cwd()}/bin/core/engine${collectPath}`),

                // Collect Process
                async (collectedDatas)=>{

                    // Loop interface files
                    for(let {
                        fileName,
                        fileData,
                        subPath
                    } of collectedDatas){
                        fileData = replaceAll(fileData, `\r`, ``)

                        let collectedCommentData = Injector.collectCommentData(fileData, fileName)
                        for(let collectedComment of collectedCommentData){

                            let indent = collectedComment.indent
                            let contexts: string[] = []

                            if(typeof translationData[collectedComment.id] != 'undefined')
                                contexts = translationData[collectedComment.id].contexts

                            let target = Extractor.renderComment([`{${collectedComment.id}}`], indent)
                            let change = Extractor.renderComment(contexts, indent)
                            fileData = fileData.replace(target, change)
                        }

                        // Crreate Path
                        let rearrangedPath = path.resolve(`${injectPath}/${collectPath}/${subPath}/`)
                        try{ await fs.promises.mkdir(rearrangedPath, { recursive: true }) } catch(e){}

                        // Write File
                        fs.writeFileSync(path.resolve(`${rearrangedPath}/${fileName}`), fileData)
                    }
                },

                // No Collect Index File: false
                false
            )
        }

        //
        for(let additionalFilePath of Object.keys(translationData['_file'])){
            let fileContexts = translationData['_file'][additionalFilePath]
            fs.writeFileSync(`${injectPath}${additionalFilePath}`, fileContexts.join('\n'))
        }

        // Copy index.ts
        fs.writeFileSync(`${injectPath}/index.ts`, fs.readFileSync(`${process.cwd()}/bin/core/engine/index.ts`))
        Logger.debug(`[${lang.toUpperCase()}] Files Initialized.`)
    }

    console.log('')
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __dirname){
        let option = process.argv[2]
        ;(async ()=>{
            if(typeof process.argv[2] != 'undefined'){
                await Inject(process.argv[2].split(','))
            }else{
                Inject()
            }
        })()
    }
}catch(e){}