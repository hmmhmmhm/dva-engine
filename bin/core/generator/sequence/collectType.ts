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
    Logger.debug(`[${data.lang.toUpperCase()}] Entering Type Generate...`)
    Util.collectInterfaceFiles(
        `${process.cwd()}/bin/release/${data.lang}/type/`,
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

                let lowerCaseFileName = fileName.split('.')[0]

                try{
                    // Create child resolver folder
                    try{ fs.mkdirSync(`${data.resolverPath}/type`) } catch(e) {}

                    // let resolverName = Util.camelCaseToPascalCase(fileName.split('.')[0], false, false)
                    let resolverTypes = Util.typeExtractor(fileData)

                    /**
                     * `resolverCode` [export]
                     */
                    let resolverCode = ``
                    let typeFilePaths: string[] = []
                    let stringTypes: string[] = []
                    let numberTypes: string[] = []

                    // Collect Resolver Type Names
                    for(let resolverType of resolverTypes){
                        resolverType = resolverType.replace('\r', '')
                        if(resolverType[0] == 'I'){
                            // Case I*
                            let typeFilePath = Util.pascalCaseToCamelCase(resolverType, false, true)
                            typeFilePaths.push(`export * from '../value/${typeFilePath}'\n`)

                            // Pre Collect Type
                            //   key: typeFilePath
                            // value: [lowerCaseFileName]
                            if(typeof data.preCollectedTypes[typeFilePath] == 'undefined')
                                data.preCollectedTypes[typeFilePath] = []
                            data.preCollectedTypes[typeFilePath].push(lowerCaseFileName)

                        }else{
                            // Case Value*Type
                            if(typeof data.preCollectedTypeFileNames[resolverType] != 'undefined'){
                                let typeFilePath = data.preCollectedTypeFileNames[resolverType]
                                typeFilePaths.push(`export * from './${typeFilePath}'\n`)

                            }else{
                                if(resolverType.length != 0 && resolverType.indexOf(`\'`) != -1){
                                    stringTypes.push (resolverType)
                                    continue
                                }else if(resolverType.length != 0 && Number.isInteger(Number(resolverType))){
                                    numberTypes.push (resolverType)
                                    continue
                                }
                                Logger.critical(`[${data.lang.toUpperCase()}] Undetected resolverType: <${resolverType}> (type/${fileName})`)
                            }
                        }
                    }

                    if(stringTypes.length != 0){
                        typeFilePaths.push(`/**\n * @param str Type \'\n * Then can see list of available string lists.\n */\n`)
                        typeFilePaths.push(`export const Default = (str: ${stringTypes.join(' | ')}) => str\n`)
                    }else if(numberTypes.length != 0){
                        typeFilePaths.push(`/**\n * @param num Type Any Number.\n * Then can see list of available number lists. */\n`)
                        typeFilePaths.push(`export const Default = (num: ${numberTypes.join(' | ')}) => num\n`)
                    }

                    // Write Export Codes
                    for(let typeFilePath of typeFilePaths)
                        resolverCode += typeFilePath

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    if(resolverCode.length != 0){
                        fs.writeFileSync(`${data.resolverPath}/type/${fileName}`, resolverCode)
                        Logger.debug(`[${data.lang.toUpperCase()}] Created Resolver <type/${fileName}>`)

                        let upperCaseFileName = lowerCaseFileName
                        let upperCaseFileNameArr = upperCaseFileName.split('')
                        upperCaseFileNameArr[0] = upperCaseFileName[0].toUpperCase()
                        upperCaseFileName = upperCaseFileNameArr.join('')

                        //typeIndexData.push(`export * from './${fileName.split('.')[0]}'\n`)
                        typeIndexCode += `import * as ${upperCaseFileName} from './${lowerCaseFileName}'\n`
                        typeIndexCode += `export \{ ${upperCaseFileName} \}\n\n`
                    }

                }catch(e){
                    Logger.critical(`[${data.lang.toUpperCase()}] Generator Crashed#1`)
                    console.log(e)
                    reject()
                    return
                }
            }

            // Create child index
            fs.writeFileSync(`${data.resolverPath}/type/index.ts`, typeIndexCode)
            Logger.debug(`[${data.lang.toUpperCase()}] Created Type Resolver <type/index.ts>`)
        }
    )

    resolve()
})