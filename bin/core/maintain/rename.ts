import { camelCaseToPascalCase, collectInterfaceFiles } from '../generator/util'
import { renameSync, writeFileSync } from 'fs'
import stringReplaceAll from 'string-replace-all'
import { getLogger } from '../generator/logger'

export const typescriptsPaths = [
    `bin/core/engine/interface`,
    `bin/core/engine/type`
]
export const generatorDataPath = `${process.cwd()}/bin/core/generator/generatorData.json`
export const reformerDataPath = `${process.cwd()}/bin/core/generator/reformerData.json`

/**
 * A function of an automated maintenance script
 * that automatically renames an overwatch workshop
 * if the function name is changed
 * or the interface name is incorrect.
 * 
 * 오버워치 워크샵의 함수 이름이 변경되었거나,
 * 인터페이스 이름이 잘못된 경우 이름을 변경가능한,
 * 자동화 유지보수 스크립트의 함수입니다.
 */
export const RenameUpdater = async (targetName: string, fixName: string, debugMode: boolean= true) =>{
    const targetMap = NameMapGenerator(targetName)
    const fixMap = NameMapGenerator(fixName)
    const fixFilter = NameMapFilter(targetMap, fixMap)

    let Logger = getLogger()

    Logger.debug('------------------------LOG START----------------------------')

    // File Name Replace
    for(let typescriptsPath of typescriptsPaths){
        await collectInterfaceFiles(
            typescriptsPath,
            async (collectedDatas) => {

                // Find Replace Target
                for(let {
                    fileName,
                    staticPath,
                    subPath,
                    filePath
                } of collectedDatas){

                    let filters = fixFilter(fileName)

                    let newFileName = fileName
                    for(let filter of filters)
                        newFileName = stringReplaceAll(newFileName, filter.target, filter.fix)

                    if(filters.length != 0){
                        let newPath = `${staticPath}/${newFileName}`

                        Logger.debug(`File Name has been changed\t[${subPath}${fileName}] -> [${subPath}${newFileName}]`)
                        if(!debugMode) renameSync(filePath, newPath)
                    }
                }
            }
        )
    }

    // File Data Replace
    for(let typescriptsPath of typescriptsPaths){
        collectInterfaceFiles(
            typescriptsPath,
            async (collectedDatas) => {

                // Find Replace Target
                for(let {
                    fileName,
                    fileData,
                    subPath,
                    filePath
                } of collectedDatas){

                    let filters = fixFilter(fileData)

                    let newFileData = fileData
                    for(let filter of filters)
                        newFileData = stringReplaceAll(newFileData, filter.target, filter.fix)

                    // REPORT STATUS & WRITE
                    if(filters.length != 0){
                        console.log('')
                        Logger.debug(`File [${subPath}${fileName}] has been changed.`)

                        let fileLines = fileData.split(`\n`)
                        let newFileLines = newFileData.split(`\n`)
                        for(let fileLineIndex in fileLines){
                            let fileLine = fileLines[fileLineIndex]

                            if(fixFilter(fileLine).length == 0) continue

                            console.log('')
                            Logger.debug(`File [${subPath}${fileName}] Line:${fileLineIndex}`)
                            Logger.debug(`[Before: ${fileLine}]`)
                            Logger.debug(`[After : ${newFileLines[fileLineIndex]}]`)
                            console.log('')
                        }

                        // fs.write
                        if(!debugMode) writeFileSync(filePath, newFileData)
                    }
                }
            },

            // `false` will be include index.ts
            false
        )
    }

    // JSON File Data Replace
    let generatorData = require(generatorDataPath)
    let isJSON1_Changed = false
    for(let type1Name of Object.keys(generatorData)){
        for(let type2Name of Object.keys(generatorData[type1Name])){
            for(let type3Name of Object.keys(generatorData[type1Name][type2Name])){
                // console.log(`${type1Name}.${type2Name}.${type3Name}`)

                // Value backup
                let value = generatorData[type1Name][type2Name][type3Name]
                let newValue = JSON.parse(JSON.stringify(value))

                // Value has benn changed
                let valueFilters = fixFilter(value)
                if(valueFilters.length != 0){

                    for(let filter of valueFilters)
                        newValue = stringReplaceAll(newValue, filter.target, filter.fix)
                }

                let keyFilters = fixFilter(type3Name)
                if(keyFilters.length == 0){
                    if(valueFilters.length != 0){

                        // It must need to rewrite
                        if(!isJSON1_Changed) isJSON1_Changed = true

                        console.log('')
                        Logger.debug(`GeneratorData Value Changed [${type1Name}.${type2Name}.${type3Name}]`)
                        Logger.debug(`Before: [${value}]`)
                        Logger.debug(`After : [${newValue}]`)
                        console.log('')

                        generatorData[type1Name][type2Name][type3Name] = newValue
                    }
                }else{
                    // It must need to rewrite
                    if(!isJSON1_Changed) isJSON1_Changed = true

                    let newKey = String(type3Name)
                    for(let filter of keyFilters)
                        newKey = stringReplaceAll(newKey, filter.target, filter.fix)

                    // REPORT STATUS
                    if(valueFilters.length != 0){

                        // CHANGED VALUE
                        console.log('')
                        Logger.debug(`GeneratorData Key   Changed [${type1Name}.${type2Name}.${type3Name}] -> [${type1Name}.${type2Name}.${newKey}]`)
                        Logger.debug(`GeneratorData Value Changed [${type1Name}.${type2Name}.${newKey}]`)
                        Logger.debug(`Before: [${value}]`)
                        Logger.debug(`After : [${newValue}]`)
                        console.log('')

                    }else{

                        // NON CHANGED VALUE
                        console.log('')
                        Logger.debug(`GeneratorData Key Changed [${type1Name}.${type2Name}.${type3Name}] -> [${type1Name}.${type2Name}.${newKey}]`)
                        console.log('')
                    }

                    generatorData[type1Name][type2Name][newKey] = newValue
                    delete generatorData[type1Name][type2Name][type3Name]
                }
            }
        }
    }
    if(!debugMode && isJSON1_Changed) writeFileSync(generatorDataPath, JSON.stringify(generatorData, null, 2))

    // JSON File Data Replace
    let reformerData = require(reformerDataPath)
    let isJSON2_Changed = false
    for(let type1Name of Object.keys(reformerData)){
        for(let type2Name of Object.keys(reformerData[type1Name])){

            let valueArray: string[] = reformerData[type1Name][type2Name]
            let newValueArray: string[] = []

            if(Array.isArray(valueArray)){
                for(let valueItem of valueArray){
                    let filters = fixFilter(valueItem)

                    if(filters.length == 0){
                        newValueArray.push(valueItem)
                    }else{
                        // It must need to rewrite
                        if(!isJSON2_Changed) isJSON2_Changed = true

                        let newValueItem = valueItem
                        for(let filter of filters)
                            newValueItem = stringReplaceAll(newValueItem, filter.target, filter.fix)

                        Logger.debug(`* ReformerData Class function has been changed [${type1Name}.${type2Name}] ${valueItem} -> ${newValueItem}`)
                        newValueArray.push(newValueItem)
                    }
                }

                reformerData[type1Name][type2Name] = newValueArray
            }
        }
    }
    if(!debugMode && isJSON2_Changed) writeFileSync(reformerDataPath, JSON.stringify(reformerData, null, 2))

    Logger.debug('------------------------LOG ENDED----------------------------')
    if(!debugMode){
        Logger.debug(`The changes were applied to the file.`)
        Logger.debug(`If anything has been changed, Please re-run <npm run update>.`)
    }else{
        Logger.debug(`The changes were not applied to the file.`)
        Logger.debug(`If you want to save your changes, enter the third parameter as fix`)
        console.log('')
        Logger.debug(`Ex: npm run update:rename ${targetName} ${fixName} fix`)
    }
}

export interface INameMap {
    camelCase: string
    pascalCase: string
    upperCase: string
    interfaceName: string
}

export const NameMapGenerator = (camelCase: string) => {
    
    let pascalCase = camelCaseToPascalCase(camelCase)
    let upperCase = pascalCase.toUpperCase()
    let interfaceName = `I${pascalCase.split(' ').join('')}`

    let namepMap: INameMap = {
        camelCase,
        pascalCase,
        upperCase,
        interfaceName
    }
    return namepMap
}

export interface NameMapResult {
    target: string
    fix : string
}

export const NameMapFilter = (targetMap: INameMap, fixMap: INameMap) => {

    return (source: string): NameMapResult[] => {
        let replaceTarget: NameMapResult[] = []
        for(let targetMapIndex of Object.keys(targetMap)){

            if(source.indexOf(targetMap[targetMapIndex]) != -1){
                replaceTarget.push({
                    target: targetMap[targetMapIndex],
                    fix: fixMap[targetMapIndex]
                })
            }
        }
        return replaceTarget
    }
}

try{
    if(`${process.argv[1]}` == __filename){
        if(typeof process.argv[2] != 'undefined'){
            RenameUpdater(
                process.argv[2],
                process.argv[3], 
                process.argv[4] != 'fix'
            )
        }else{
            // INFO MESSAGE
            let Logger = getLogger()
            Logger.debug(`If you enter the function name (in the form of a camel case)`)
            Logger.debug(`to find and replace in all project files, it will automatically replace it.`)
            console.log('')
            Logger.debug(`npm run update:rename <before> <after> <fix||(empty)>`)
            Logger.debug(`(Ex: npm run update:rename applyImpulse applyImpluse)`)
        }
    }
}catch(e){}