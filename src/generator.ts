import fs from 'fs'
import { resolve } from 'path'
import rimraf from 'rimraf'

import * as TJS from 'typescript-json-schema'
import FolderLogger from 'folder-logger'
import NestedFolder from 'nested-static'

import generatorData from './generator.json'

/**
 * @description
 * Generator Logger
 */
const Logger = new FolderLogger('./')

/**
 * @description
 * Resolver Generator
 */
export const Generator = async (lang = 'kor') => {

    /**
     * @description
     * `Initialize`
     */
    Logger.debug('Running on Generator Initialize Sequence...')
    Logger.debug('Delete all previously generated Resolver codes...')
    const resolverPath = `${process.cwd()}/src/${lang}/resolver/child/`
    try{ rimraf.sync(resolverPath) } catch(e){}
    try{ fs.mkdirSync(resolverPath) } catch(e){}

    /**
     * @description
     * `Interfaces Parse`
     */
    Logger.debug('Typescript Interface Initialize...')
    let interfaces = await parseInterfaces(`${process.cwd()}/src/${lang}/interface/index.ts`)

    // Collected Interfaces write
    // fs.writeFileSync(`${resolverPath}/test.json`, JSON.stringify(interfaces, null, 2))
    Logger.debug('Typescript Interface Initialized.')

    /**
     * @description
     * `Collects the file name that type matches.`
     * (Doesn't collect file extension)
     */
    let preCollectedTypeFileNames = {}
    /**
     * @description
     * `Pre Type Names Collect`
     */
    await collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/type/`,
        async (collectedDatas)=>{
            for(let {
                fileName,
                subPath,
                typeName
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

                if(typeName.length != 0){
                    preCollectedTypeFileNames[typeName] = `${fileName.split('.')[0]}`
                }else{
                    Logger.warn(`Failed to find type of fileName: ${fileName}`)
                }
            }
        }
    )

    /**
     * @description
     * `Event Collect`
     */
    console.log('')
    Logger.debug('Entering Event Generate...')
    collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/interface/event/child`,
        async (collectedDatas)=>{

            // Create child resolvers
            for(let {
                fileName,
                interfaceName
            } of collectedDatas){
                try{
                    // Create child resolver folder
                    try{ fs.mkdirSync(`${resolverPath}/event`) } catch(e) {}

                    let isPropertiesExist =
                        interfaces[interfaceName].properties
                        && interfaces[interfaceName].properties.length != 0

                    let eventName = generatorData['event']['eventName'][fileName]

                    /**
                     * `resolverCode` [import]
                     */
                    let resolverCode = ``
                    if(isPropertiesExist) resolverCode += `import { ${interfaceName} } from '../../../interface'\n\n`

                    /**
                     * `resolverCode` [description]
                     */
                    let resolverDescription = '/**\n'
                    for(let description of interfaces[interfaceName].description.split('\n')){
                        resolverDescription += ` * ${description}\n`
                    }
                    resolverDescription += ' */\n'
                    resolverCode += resolverDescription

                    /**
                     * `resolverCode` [export]
                     */
                    resolverCode += (isPropertiesExist) ?
                        `export const ${fileName.split('.')[0]} = (value: ${interfaceName}) => {\n`
                        : `export const ${fileName.split('.')[0]} = () => {\n`
                    resolverCode += '\treturn`\n'

                    /**
                     * [sub] `workshopCode` [init]
                     */
                    let workshopCode = '\tevent\n\t{\n'
                    workshopCode += `\t\t${eventName};\n`

                    /**
                     * [sub] `workshopCode` [properties]
                     */
                    if(isPropertiesExist){
                        for(let propertie of Object.keys(interfaces[interfaceName].properties))
                            workshopCode += `\t\t\$\{value.${propertie}\};\n`
                    }
                    workshopCode += '\t}`'

                    /**
                     * `resolverCode` [workshopCode]
                     */
                    resolverCode += workshopCode
                    resolverCode += '\n}'

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    Logger.debug(`Created Resolver <event/${fileName}>`)
                    fs.writeFileSync(`${resolverPath}/event/${fileName}`, resolverCode)

                }catch(e){
                    Logger.critical('Generator Crashed#1')
                    console.log(e)
                }
            }

            // Create child index
            let indexCode = ''
            for(let { fileName } of collectedDatas)
                indexCode += `export * from './${fileName.split('.')[0]}'\n`
            fs.writeFileSync(`${resolverPath}/event/index.ts`, indexCode)
            Logger.debug('Created Event Resolver <event/index.ts>')
        }
    )

    /**
     * @description
     * Archived Value Function Collector
     */

    /*
    collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/interface/value/child`,
        async (collectedDatas)=>{

            // Create child resolvers
            let json = {}
            for(let {
                fileName,
                interfaceName
            } of collectedDatas){

                json[fileName] = camelCaseToPascalCase(interfaceName, true, true)
            }
            fs.writeFileSync(`${resolverPath}/test.json`, JSON.stringify(json, null, 2))
        }
    )
    return
    */

    /**
     * @description
     * `Value Collect`
     */
    console.log('')
    Logger.debug('Entering Value Generate...')
    collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/interface/value/child`,
        async (collectedDatas)=>{

            // Create child resolvers
            for(let {
                fileName,
                interfaceName
            } of collectedDatas){
                try{
                    // Create child resolver folder
                    try{ fs.mkdirSync(`${resolverPath}/value`) } catch(e) {}

                    let isPropertiesExist = false
                    try{
                        isPropertiesExist =
                            interfaces[interfaceName].properties
                            && interfaces[interfaceName].properties.length != 0
                    }catch(e){}

                    let valueName = generatorData['value']['valueName'][fileName]

                    /**
                     * `resolverCode` [import]
                     */
                    let resolverCode = ``
                    //if(isPropertiesExist) resolverCode += `import { ${interfaceName} } from '../../../interface'\n\n`
                    let propertieTypeMap = {}
                    if(isPropertiesExist){
                        let interfaceNames = ``
                        let interfaceNamesMap = {}

                        // Collect All Unique Interface (All type will be converted interface)
                        for(let propertieName of Object.keys(interfaces[interfaceName].properties)){
                            // Case 1 (Single Ref)
                            if(typeof interfaces[interfaceName].properties[propertieName]['$ref'] != 'undefined'){
                                if(typeof propertieTypeMap[propertieName] == 'undefined') propertieTypeMap[propertieName] = []
                                let notUniqueInterface = interfaces[interfaceName].properties[propertieName]

                                // TODO 
                                let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
                                notUniqueInterfaceName = pureTypeNameExtractor(notUniqueInterfaceName)
                                // ValueArrayType
                                // pureTypeNameExtractor
                                interfaceNamesMap[notUniqueInterfaceName] = true
                                propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                            }

                            // Case 2 (Multiple Ref)
                            if(interfaces[interfaceName].properties[propertieName].anyOf){
                                Logger.warn(`Can't Use Multiple Type Reference in One Propertie (value/${fileName})`)
                                /*
                                if(typeof propertieTypeMap[propertieName] == 'undefined') propertieTypeMap[propertieName] = []
                                for(let notUniqueInterface of interfaces[interfaceName].properties[propertieName].anyOf){
                                    let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
                                    interfaceNamesMap[notUniqueInterfaceName] = true
                                    propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                                }
                                */
                            }
                        }
                        for(let propertieTypeName of Object.keys(interfaceNamesMap)){
                            try{
                                if(interfaceNames.length == 0) interfaceNames += `\n`
                                interfaceNames += `\t${propertieTypeName},\n`
                            }catch(e){ console.log(e) }
                        }

                        // Write Interface
                        //if(interfaceNames.length != 0){
                        //    resolverCode += `import { ${interfaceNames} } from '../../../interface'\n\n`
                        //}
                    }

                    /**
                     * `resolverCode` [description]
                     */
                    try{
                        if(interfaces[interfaceName].description){

                            // Create Interface Description
                            let resolverDescription = '/**\n'
                            for(let description of interfaces[interfaceName].description.split('\n'))
                                resolverDescription += ` * ${description}\n`
                            resolverDescription += ' */\n'
                            resolverCode += resolverDescription
                        }
                    }catch(e){}

                    /**
                     * `resolverCode` [export]
                     */
                    let resolverName = fileName.split('.')[0]
                    if(typeof generatorData['value']['methodNameReplace'][resolverName] != 'undefined')
                        resolverName = generatorData['value']['methodNameReplace'][resolverName]

                    // Values Collect
                    let valueProperties = ``
                    if(isPropertiesExist){
                        for(let propertieName of Object.keys(interfaces[interfaceName].properties)){
                            try{
                                //let propertieTypeName = interfaces[interfaceName].properties[propertieName].type

                                let propertieTypeName = ``
                                if(typeof propertieTypeMap[propertieName] != 'undefined'){
                                    if(propertieTypeMap[propertieName].length > 1)
                                        Logger.critical(`[TYPE BROKEN ALERT] Multiple Types in Propertie! (value/${fileName})`)
                                    propertieTypeName = propertieTypeMap[propertieName].join(' | ')
                                }else{
                                    // Allow Default Data Type
                                    try{
                                        propertieTypeName = interfaces[interfaceName].properties[propertieName].type
                                    }catch(e){
                                        Logger.critical(`Unexpected Interface Param Type! (value/${fileName})`)
                                        console.log(interfaces[interfaceName].properties[propertieName])
                                    }
                                }
                                valueProperties += (valueProperties.length == 0) ? `\n` : `,\n`

                                /**
                                 * `Insert Propertie Description`
                                 */
                                let propertiesDescription = '\t/**\n'
                                if(interfaces[interfaceName].properties[propertieName].description)
                                    for(let description of interfaces[interfaceName].properties[propertieName].description.split('\n'))
                                        propertiesDescription += `\t * ${description}\n`

                                /**
                                 * `Insert Propertie Type Reference By JSDoc`
                                 */
                                let typescriptTypeList = ['number']
                                if(typescriptTypeList.indexOf(propertieTypeName) == -1){
                                    propertiesDescription += `\t * - \`${propertieTypeName}.\` 또는 \`Type.${propertieTypeName}.\` 를 입력하면 \n`
                                    propertiesDescription += `\t *   여기서 사용 가능한 함수를 확인할 수 있습니다.\n`
                                }
                                propertiesDescription += '\t */\n'
                                valueProperties += propertiesDescription

                                if(typescriptTypeList.indexOf(propertieTypeName) == -1){
                                    valueProperties += `\t${propertieName}: string`
                                }else{
                                    valueProperties += `\t${propertieName}: ${propertieTypeName}`
                                }
                            }catch(e){
                                console.log(`ERROR fileName: ${fileName}`)
                                console.log(e) 
                            }
                        }
                    }

                    resolverCode += `export const ${resolverName} = (${valueProperties}\n) => {\n\n`
                    resolverCode += '\treturn `'

                    /**
                     * [sub] `workshopCode` [init]
                     */
                    let workshopCode = valueName

                    /**
                     * [sub] `workshopCode` [properties]
                     */
                    if(isPropertiesExist){
                        workshopCode += '('
                        let properties = Object.keys(interfaces[interfaceName].properties)
                        for(let propertieIndex in properties){
                            if(Number(propertieIndex) != 0) workshopCode += ', '
                            let propertie = properties[propertieIndex]
                            workshopCode += `\$\{${propertie}\}`
                        }
                        workshopCode += ')'
                    }

                    /**
                     * `resolverCode` [workshopCode]
                     */
                    resolverCode += workshopCode
                    resolverCode += '`\n}'

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    Logger.debug(`Created Resolver <value/${fileName}>`)
                    fs.writeFileSync(`${resolverPath}/value/${fileName}`, resolverCode)

                }catch(e){
                    Logger.critical('Generator Crashed#1')
                    console.log(e)
                }
            }

            // Create child index
            let indexCode = ''
            for(let { fileName } of collectedDatas)
                indexCode += `export * from './${fileName.split('.')[0]}'\n`
            fs.writeFileSync(`${resolverPath}/value/index.ts`, indexCode)
            Logger.debug('Created Value Resolver <value/index.ts>')
        }
    )

    /**
     * @description
     * `Type Collect`
     */
    let typeIndexCode =``
    console.log('')
    Logger.debug('Entering Type Generate...')
    collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/type/`,
        async (collectedDatas)=>{

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
                    try{ fs.mkdirSync(`${resolverPath}/type`) } catch(e) {}

                    let resolverName = camelCaseToPascalCase(fileName.split('.')[0], false, false)
                    // interfaces[interfaceName].properties
                    let resolverTypes = typeExtractor(fileData)

                    // TODO
                    //console.log(resolverTypes)

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
                            let typeFilePath = pascalCaseToCamelCase(resolverType, false, true)
                            typeFilePaths.push(`export * from '../value/${typeFilePath}'\n`)
                        }else{
                            // Case Value*Type
                            if(typeof preCollectedTypeFileNames[resolverType] != 'undefined'){
                                let typeFilePath = preCollectedTypeFileNames[resolverType]
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
                        fs.writeFileSync(`${resolverPath}/type/${fileName}`, resolverCode)
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
                }
            }

            // Create child index
            fs.writeFileSync(`${resolverPath}/type/index.ts`, typeIndexCode)
            Logger.debug('Created Value Resolver <type/index.ts>')
        }
    )
}

/**
 * @description
 * Built-in Time Typescript Interface Parser
 */
export const parseInterfaces = async ( filePath: string) => {
    const settings: TJS.PartialArgs = {
        aliasRef: true,
        required: true
    }
    const compilerOptions: TJS.CompilerOptions = { strictNullChecks: true }

    const program = TJS.getProgramFromFiles([resolve(filePath)], compilerOptions)

    const schema = TJS.generateSchema(program, '*', settings)
    if(schema == null || schema.definitions == null) throw new Error('Failed Generator Init')
    return schema.definitions
}

/**
 * @description
 * Collect Typescript Interface Files Code
 */
export const collectInterfaceFiles = async (
    folderPath: string,
    callback: (argument: {
        fileName: string
        filePath: string
        subPath: string
        fileData: string
        interfaceName: string
        typeName: string
    }[]) => Promise<void>
) => {
    
    // Search all of the child folders
    NestedFolder(folderPath, async (folders)=>{

        let data: any = []
    
        for(let folder of folders){
            let files = fs.readdirSync(folder.staticPath)
    
            // Search all of the files
            for(let file of files){
                let filePath = folder.staticPath + '/' + file
                let stats = fs.statSync(filePath)
                if(stats.isDirectory()) continue
                if(file == 'index.ts') continue

                let fileData = String(fs.readFileSync(filePath))
                let interfaceName = ''
                let typeName = ``

                try{
                    interfaceName = fileData.split('export interface ')[1]
                        .split(' {')[0]
                        .split(' ').join('')
                }catch(e){}

                try{
                    typeName = fileData.split('export type ')[1]
                        .split('\n')[0]
                        .split(' ').join('')
                }catch(e){}

                data.push({
                    fileName: file,
                    filePath,
                    subPath: folder.subPath,
                    fileData,
                    interfaceName,
                    typeName
                })
            }
        }

        await callback(data)
    })
}

export const camelCaseToPascalCase = (name: string, doSpace = true, prefixRemove = false)=>{
    if(prefixRemove && name[0] == 'I'){
        let temp = name.split('')
        temp.shift()
        name = temp.join('')
    }

    let pascalCase = ''
    for(let alphabetIndex in name.split('')){
        let alphabet = name[alphabetIndex]

        if(Number(alphabetIndex) == 0){
            pascalCase += alphabet.toUpperCase()
            continue
        }

        let isUpperCase = alphabet == alphabet.toUpperCase()
        if(isUpperCase){
            if(doSpace) pascalCase += ' '
            pascalCase += alphabet.toUpperCase()
        }else{
            pascalCase += alphabet.toLowerCase()
        }
    }
    return pascalCase
}


export const pascalCaseToCamelCase = (name: string, doSpace = true, prefixRemove = false, prefixInstall = false)=>{
    let camelCase = ''

    if(prefixRemove && name[0] == 'I'){
        let temp = name.split('')
        temp.shift()
        name = temp.join('')
    }

    for(let alphabetIndex in name.split('')){
        let alphabet = name[alphabetIndex]

        if(Number(alphabetIndex) == 0){
            camelCase += alphabet.toLowerCase()
            continue
        }

        let isLowerCase = alphabet == alphabet.toLowerCase()
        if(isLowerCase){
            camelCase += alphabet.toLowerCase()
        }else{
            if(doSpace) camelCase += ' '
            camelCase += alphabet.toUpperCase()
        }
    }

    if(prefixInstall && name[0] != 'I')
        name = `I${name}`

    return camelCase
}

const typeExtractor = (code): string[] => {
    let contexts = code
    contexts = contexts.split('\t').join('')
    contexts = contexts.split('    ').join('')
    contexts = contexts.split('export type ')[1].split('\n')
    contexts.shift()

    let list: any = []
    for(let context of contexts){
        //console.log(context)
        if(context[0] == '=' || context[0] == '|'){
            if(context[1] == ' '){
                context = context
                    .split('= ').join('')
                    .split('| ').join('')
                    .split('\r').join('')
                list.push(context)
            }
        }
    }
    return list
}

const pureTypeNameExtractor = (name) => {
    let typeNames: string[] = []

    let word = ''
    for(let char of name.split('')){
        let isUpperCase = char.toUpperCase() == char
        if(word.length != 0 && isUpperCase){
            typeNames.push(word)
            word = ''
        }
        word += char
    }

    if(word.length != 0)
        typeNames.push(word)

    typeNames.pop()
    if(typeNames.length > 1){
        if(typeNames[0] == 'Value')
            typeNames.shift()
    }

    return typeNames.join('')
}

// Test Only
Generator()