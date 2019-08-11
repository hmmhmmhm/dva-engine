import { collectInterfaceFiles } from './util'
import { getLogger } from './logger'
import { writeFileSync, readFileSync } from 'fs'
import replaceAll from 'string-replace-all'
import { resolve } from 'path'

export const declarationMore = () => { new Promise(async (promiseResolve, promiseReject) => {

    const Logger = getLogger()

    // Sequence Logic
    let releasePath = `${process.cwd()}/dist/bin/release`

    Logger.debug(`All Declaration will be finishing...`)
    await collectInterfaceFiles(
        releasePath,
        async (collectedDatas)=>{

            for(let {
                fileName,
                fileData,
                filePath,
                subPath,
                staticPath

            } of collectedDatas){

                let fileNameParse = fileName.split('.')
                let fileActualName = fileNameParse.shift()
                let fileExt = fileNameParse.join('.')

                // Check Path is child
                // /eng/resolver/child/type/
                let isTargetPath = false
                let subPathParse = subPath.split('/')
                let targetType = [
                    'value',
                    'action',
                    'event'
                ]
                if(subPathParse[2] == 'resolver' &&
                    subPathParse[3] == 'child' &&
                    (targetType.indexOf(subPathParse[4]) != -1))
                        isTargetPath = true

                // Check Declaration Modify Target
                if(fileExt == 'js' && isTargetPath){

                    // Logger.debug(`fileName: ${fileName}`)
                    // Logger.debug(`subPath: ${subPath}`)
                    // Logger.debug(`actPath: ${releasePath}${subPath}`)
                    // Logger.debug(`isTargetPath: ${isTargetPath}`)

                    let commentContexts = fileData.split(`/**\r\n`)
                    commentContexts.shift()

                    // Collect Comments
                    let collectedComments: string[][] = []
                    for(let commentContext of commentContexts){
                        let comment = commentContext.split('\r\n */')[0]
                        comment = replaceAll(comment, ' * ', '')
                        let parsedComment: string[] = []
                        for(let commentLine of comment.split('\r\n')){
                            parsedComment.push(commentLine)
                        }
                        collectedComments.push(parsedComment)
                    }

                    // Logger.debug(`collectedComments`)
                    // Logger.debug(collectedComments)

                    let declarationFilePath = resolve(`${releasePath}${subPath}/${fileActualName}.d.ts`)
                    // Logger.debug(`declarationFilePath`)
                    // Logger.debug(declarationFilePath)

                    let declarationFileData = String(readFileSync(declarationFilePath))

                    // Parse d.ts
                    let paramsParse1 = declarationFileData.split(`: (`)
                    if(paramsParse1.length > 2){
                        promiseReject()
                        throw new Error (`Boom! might be changed system?`)
                    }

                    try{
                        let before = `${paramsParse1[0]}: (`

                        // Parsed Params
                        let params = paramsParse1[1]
                        let paramsParse2 = params.split(`) => `)
                        params = paramsParse2[0]

                        let after = `) => ${paramsParse2[1]}`
                        if(params.indexOf(`/**`) != -1){
                            Logger.warn(`<ALREADY ADDED IT'Ll BE PASSED> ${filePath}`)
                            continue
                        }

                        let parsedParams = params.split(`, `)
                        // console.log(`params`)
                        // console.log(parsedParams)

                        // Inject Modified Params
                        let modifiedParams: string[] = []
                        for(let parsedParamIndex in parsedParams){

                            let parsedParamOrderNum = Number(parsedParamIndex)
                            let parsedParam = parsedParams[parsedParamOrderNum]

                            // collectedComments
                            if(typeof collectedComments[parsedParamOrderNum + 1] != 'undefined'){
                                let comment = collectedComments[parsedParamOrderNum + 1]
                                let commentRendered = `/**\n`
                                for(let commentLine of comment)
                                    commentRendered += ` * ${commentLine}\n`
                                commentRendered += ` */`
                                modifiedParams.push(`${commentRendered}\n${parsedParam}`)
                            }else{
                                modifiedParams.push(`\n${parsedParam}`)
                            }
                        }

                        let modifiedDeclaration = `${before}\n${modifiedParams.join(`,\n`)}\n${after}`
                        writeFileSync(declarationFilePath, modifiedDeclaration)
                    }catch(e){}
                }
            }
        }
    )

    Logger.debug(`All Declaration has been finished.`)
    promiseResolve()
})}

// for CLI Command Run
if(`${process.argv[1]}` == __filename) declarationMore()