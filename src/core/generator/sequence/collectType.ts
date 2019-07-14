import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

import fs from 'fs'

/**
 * @description
 * `Collect Type`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Logger.debug('Entering Type Generate...')
    Util.collectInterfaceFiles(
        `${process.cwd()}/src/${data.lang}/type/`,
        async (collectedDatas)=>{

            let typeIndexCode =``

            // Create child resolvers
            for(let {
                fileName,
                fileData,
                subPath
            } of collectedDatas){

                // Add folder name before type name.
                let subPathArray = subPath.split('/').filter(path => path.length > 0)
                for(let subPathIndexStr in subPathArray){
                    let subPathIndex = Number(subPathIndexStr)
                    let subPath = subPathArray[subPathIndex]

                    //
                    if(subPathIndex == 0 && subPath == 'value'){
                        subPath = ''
                        let fileNames = fileName.split('')
                        fileNames[0] = fileNames[0].toLowerCase()
                        fileName = fileNames.join('')
                    }else{
                        let fileNames = fileName.split('')
                        fileNames[0] = fileNames[0].toUpperCase()
                        fileName = fileNames.join('')
                    }

                    fileName = `${subPath}${fileName}`
                }

                try{
                    // Create child resolver folder
                    try{ fs.mkdirSync(`${data.resolverPath}/type`) } catch(e) {}

                    let resolverName = Util.camelCaseToPascalCase(fileName.split('.')[0], false, false)
                    let resolverTypes = Util.typeExtractor(fileData)

                    /**
                     * `resolverCode` [export]
                     */
                    let resolverCode = ``
                    let typeFilePaths: string[] = []
                    let stringTypes: string[] = []

                    // Collect Resolver Type Names
                    for(let resolverType of resolverTypes){
                        if(resolverType[0] == 'I'){
                            // Case I*
                            let typeFilePath = Util.pascalCaseToCamelCase(resolverType, false, true)
                            typeFilePaths.push(`export * from '../value/${typeFilePath}'\n`)
                        }else{
                            // Case Value*Type
                            if(typeof data.preCollectedTypeFileNames[resolverType] != 'undefined'){
                                let typeFilePath = data.preCollectedTypeFileNames[resolverType]
                                typeFilePaths.push(`export * from './${typeFilePath}'\n`)
                            }else{
                                if(resolverType.length != 0 && resolverType.indexOf(`\'`) != -1){
                                    stringTypes.push (resolverType)
                                    continue
                                }
                                Logger.critical(`Undetected resolverType: <${resolverType}> (type/${fileName})`)
                            }
                        }
                    }
                    if(stringTypes.length != 0){
                        typeFilePaths.push(`/**\n * @param str 문자열 값입니다. \`''\`를 입력해서\n * 사용가능한 문자열 목록을 확인 할 수 있습니다.\n */\n`)
                        typeFilePaths.push(`export const Default = (str: ${stringTypes.join(' | ')}) => str\n`)
                    }

                    // Write Export Codes
                    for(let typeFilePath of typeFilePaths)
                        resolverCode += typeFilePath

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    if(resolverCode.length != 0){
                        fs.writeFileSync(`${data.resolverPath}/type/${fileName}`, resolverCode)
                        Logger.debug(`Created Resolver <type/${fileName}>`)

                        let lowerCaseFileName = fileName.split('.')[0]

                        let upperCaseFileName = lowerCaseFileName
                        let upperCaseFileNameArr = upperCaseFileName.split('')
                        upperCaseFileNameArr[0] = upperCaseFileName[0].toUpperCase()
                        upperCaseFileName = upperCaseFileNameArr.join('')

                        //typeIndexData.push(`export * from './${fileName.split('.')[0]}'\n`)
                        typeIndexCode += `import * as ${upperCaseFileName} from './${lowerCaseFileName}'\n`
                        typeIndexCode += `export \{ ${upperCaseFileName} \}\n\n`
                    }

                }catch(e){
                    Logger.critical('Generator Crashed#1')
                    console.log(e)
                    reject()
                    return
                }
            }

            // Create child index
            fs.writeFileSync(`${data.resolverPath}/type/index.ts`, typeIndexCode)
            Logger.debug('Created Value Resolver <type/index.ts>')
        }
    )

    resolve()
})