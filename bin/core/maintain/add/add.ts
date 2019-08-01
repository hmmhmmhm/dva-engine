import { getLogger } from '../../generator/logger'
import { NameMapGenerator } from '../rename'
import { collectInterfaceFiles } from '../../generator/util'
import { writeFileSync, readFileSync } from 'fs'
import { resolve } from 'path'

const Logger = getLogger()

export type CreateEventType = `Event` | `Action` | `Value`
export const createNewInterface = async (
    type: CreateEventType = `Event`,
    eventName: string,
    eventActualName: string,
    params: string[],
    onlyCheck: boolean = true
) => {

    Logger.debug(`${type.toUpperCase()} NAME: ${eventName}`)
    Logger.debug(`${type.toUpperCase()} ACTUAL NAME: ${eventActualName}`)
    Logger.debug(`${type.toUpperCase()} PARAM: ${JSON.stringify(params, null, 2)}`)

    // Description Count
    const descriptionCount = 1 + params.length

    // 신규 코멘트에 사용될 코멘트 번호를 추출합니다.
    let checkLanguageDataLastId: number | null = null
    let checkIndexOrderNum: number = 0
    let checkLanguageDataLastIdArray: number[] = []

    // CREATE LANGUAGE DATA
    // /bin/core/language/data/*
    await collectInterfaceFiles(
        `${process.cwd()}/bin/core/language/data`,

        async (collectedDatas) => {
            // Check Language Files JSON
            for(let {
                fileName,
                filePath,
                fileData
            } of collectedDatas){

                try{
                    //
                    let jsonData = JSON.parse(fileData)
                    let lastCheckedId: number = -1

                    for(let key of Object.keys(jsonData)){
                        try{
                            let keyId = Number(key)

                            if(!Number.isNaN(keyId))
                                if(keyId > lastCheckedId)
                                    lastCheckedId = keyId

                        }catch(e){}

                        // checkIndexOrderNum
                        if(typeof jsonData[key].usedFiles != 'undefined'){
                            for(let usedFile of jsonData[key].usedFiles){
                                //
                                if(typeof usedFile.path != 'undefined'
                                && usedFile.path == `/interface/${type.toLowerCase()}/${type.toLowerCase()}.ts`){

                                    // Parse Order Number
                                    if(typeof usedFile.orderNumber != 'undefined'){

                                        try{
                                            let parsedOrderNumber = parseInt(usedFile.orderNumber)
                                            if(checkIndexOrderNum == null || checkIndexOrderNum < parsedOrderNumber)
                                                checkIndexOrderNum = parsedOrderNumber
                                        }catch(e){}
                                    }
                                }
                            }
                        }
                    }

                    // IF NOTHING EXIST IT'LL BE PASSED
                    if(lastCheckedId == -1) continue

                    if(checkLanguageDataLastId === null){
                        checkLanguageDataLastId = lastCheckedId
                    }else{
                        if(checkLanguageDataLastId != lastCheckedId)
                            Logger.critical(`LANGUAGE DATA LAST ID HAS CONFLICTED!! (${checkLanguageDataLastId}) != ${lastCheckedId}`)
                    }

                    console.log(``)

                    for(let i=1; i<=descriptionCount; i++){
                        jsonData[checkLanguageDataLastId+i] = {
                            contexts: [`TODO`],
                            usedFiles: [
                                // event.ts
                                {
                                    "topName": `I${type}`,
                                    "orderNumber": checkIndexOrderNum + i,
                                    "path": `/interface/${type.toLowerCase()}/${type.toLowerCase()}.ts`,
                                    "indent": 0
                                },

                                // actualInterface.ts
                                {
                                    "topName": eventActualName,
                                    "orderNumber": (i-1),
                                    "path": `/interface/${type.toLowerCase()}/child/${eventName}.ts`,
                                    "indent": ((i-1)==0) ? 0 : 4
                                }
                            ]
                        }

                        // console.log(jsonData[descriptionCount])
                        if(checkLanguageDataLastIdArray.indexOf(checkLanguageDataLastId+i) == -1)
                            checkLanguageDataLastIdArray.push(checkLanguageDataLastId+i)
                    }

                    // FILE WRITE
                    if(!onlyCheck){
                        writeFileSync(filePath, JSON.stringify(jsonData, null, 2))
                        Logger.debug(`LANGUAGE DATA WRITED`)
                    }else{
                        Logger.debug(`LANGUAGE DATA WILL BE WRITE`)
                    }
                    Logger.debug(`\t${fileName} (${filePath})`)
                    Logger.debug(`\t(CREATED IDs: ${checkLanguageDataLastIdArray.join(', ')})`)
                    Logger.debug(`Please type contexts directly in each translation.`)

                }catch(e){
                    Logger.critical(`LANGUAGE DATA UPDATE PROCESS CRASHED`)
                    Logger.critical(`\t${fileName} (${filePath}) (${fileData.length})`)
                }
            }
        }
    )

    // Write Event Interface File.
    // /bin/core/engine/interface/event/child/*.ts
    let eventNameMap = NameMapGenerator(eventName)

    let fileCode = ``
    fileCode += `import { } from '../../../type'\n\n`
    fileCode += `/**\n`
    fileCode += ` * {${checkLanguageDataLastIdArray[0]}}\n`
    fileCode += ` */\n`
    fileCode += `export interface ${eventNameMap.interfaceName} {${params.length == 0 ? '' : '\n'}`
    for(let paramIndex in params){
        let param = params[paramIndex]
        fileCode += `    /**\n`
        fileCode += `     * {${checkLanguageDataLastIdArray[(Number(paramIndex)+1)]}}\n`
        fileCode += `     */\n`
        fileCode += `    ${param}: TODO\n`
    }
    fileCode += `}`

    let interfaceFilePath = resolve(`${process.cwd()}/bin/core/engine/interface/${type.toLowerCase()}/child/${eventNameMap.camelCase}.ts`)

    console.log(``)
    if(!onlyCheck){
        writeFileSync(interfaceFilePath, fileCode)
        console.log(``)
        Logger.debug(`INTERFACE FILE HAS BEEN WRITED`)
        Logger.debug(`\t(${interfaceFilePath})`)
    }else{
        Logger.debug(`INTERFACE FILE WILL BE WRITE`)
        Logger.debug(`\t(${interfaceFilePath})`)
    }

    // /bin/core/engine/interface/event/event.ts
    let eventIndexPath = resolve(`${process.cwd()}/bin/core/engine/interface/${type.toLowerCase()}/${type.toLowerCase()}.ts`)
    let eventIndexData = String(readFileSync(eventIndexPath))

    let eventIndexDataParse = eventIndexData.split('}')
    eventIndexDataParse.pop()

    let newEventIndexCode = eventIndexDataParse.join(`}`)
    newEventIndexCode += `\n`
    newEventIndexCode += `    /**\n`
    newEventIndexCode += `     * {${checkLanguageDataLastIdArray[0]}}\n`
    newEventIndexCode += `     */\n`
    newEventIndexCode += `    ${eventNameMap.camelCase}: ${eventNameMap.interfaceName}\n`
    newEventIndexCode += `}`

    // Write Event Interface File.
    // /bin/core/engine/interface/event/child/index.ts

    /**
     * @TODO
     * 1. 이거
     * 2. event, action, value 처리통합
     */

    // Import Inject
    console.log(``)
    if(!onlyCheck){
        newEventIndexCode = newEventIndexCode.replace(
            `\n} from './child'`,
            `,\n    ${eventNameMap.interfaceName},\n} from './child'`)

        writeFileSync(eventIndexPath, newEventIndexCode)

        Logger.debug(`${type.toUpperCase()} INDEX FILE HAS BEEN WRITED`)
        Logger.debug(`    (${eventIndexPath})`)
    }else{
        Logger.debug(`${type.toUpperCase()} INDEX FILE WILL BE WRITE`)
        Logger.debug(`    (${eventIndexPath})`)
    }

    // /bin/core/generator/generatorData.json
    let generatorDataFilePath = resolve(`${process.cwd()}/bin/core/generator/generatorData.json`)
    let generatorData = JSON.parse(String(readFileSync(generatorDataFilePath)))

    generatorData[`${type.toLowerCase()}`][`${type.toLowerCase()}Name`][`${eventNameMap.camelCase}.ts`] = eventActualName

    console.log(``)
    if(onlyCheck){
        Logger.debug(`GENERATOR DATA WILL BE WRITE`)
    }else{
        writeFileSync(generatorDataFilePath, generatorData)
        Logger.debug(`GENERATOR DATA HAS BEEN REPLACED`)
    }
    Logger.debug(`\t(${generatorDataFilePath})`)
    Logger.debug(`\t(${type.toLowerCase()}.${type.toLowerCase()}Name['${eventNameMap.camelCase}.ts'] = '${eventActualName}')`)

    console.log(``)
    Logger.debug(`${type} '${eventName}' has been successfully created!`)
}