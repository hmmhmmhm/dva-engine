import * as Util from '../../generator/util'
import * as Extractor from './extractor'

import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

/**
 * @description
 * Collects all comments on the interface
 * that have already been created,
 * and replaces the comments with an ID.
 * 
 * @param lang 
 */
export const Extract = async (lang: string = 'kor')=>{

    // Create Extract Path
    let extractPath = `${process.cwd()}/bin/dist/_extracted/`
    try{ rimraf.sync(extractPath) } catch(e){}
    try{ await fs.promises.mkdir(extractPath, { recursive: true }) } catch(e){}

    // Common Data
    let common: Extractor.ICommonData = {
        currentFilePath: ``,
        idMap: {},
        resultMap: {}
    }

    // Collect CommentId
    let commentId = 0

    // Collect Paths
    let collectPaths = [
        `/interface`,
        `/type`
    ]

    // Collect all interface files
    for(let collectPath of collectPaths){
        await Util.collectInterfaceFiles(

            // Collect Path
            path.resolve(`${process.cwd()}/bin/${lang}/${collectPath}`),

            // Collect Process
            async (collectedDatas)=>{
    
                // Loop interface files
                for(let {
                    fileName,
                    fileData,
                    subPath
                } of collectedDatas){

                    // Set Common Data Prop
                    common.currentFilePath = `${collectPath}${subPath}${fileName}`

                    // Rearrange Comments
                    let data = Extractor.rearrangeComments(fileData, commentId, common) // @TODO COLLECT MAP

                    // Refrash Comment Id
                    commentId = data.id

                    // Crreate Path
                    let rearrangedPath = path.resolve(`${extractPath}/${collectPath}/${subPath}/`)
                    try{ await fs.promises.mkdir(rearrangedPath, { recursive: true }) } catch(e){}

                    // Write File
                    await fs.writeFileSync(path.resolve(`${rearrangedPath}/${fileName}`), data.rearrangedCode)
                }
            },

            // No Collect Index File: false
            false
        )
    }

    fs.writeFileSync(path.resolve(`${extractPath}/${lang}.json`), JSON.stringify(common.resultMap, null, 2))
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __dirname){
        let option = process.argv[2]
        ;(async ()=>{
            await Extract(option)
            console.log('Finished')
        })()
    }
}catch(e){}