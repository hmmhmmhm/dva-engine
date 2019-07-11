import fs from 'fs'
import { resolve } from 'path'

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
    try{ fs.rmdirSync(resolverPath) } catch(e){}
    try{ fs.mkdirSync(resolverPath) } catch(e){}

    /**
     * @description
     * `Interfaces Parse`
     */
    Logger.debug('Typescript Interface Initialize...')
    let interfaces = await parseInterfaces(`${process.cwd()}/src/${lang}/interface/index.ts`)
    // fs.writeFileSync(`${resolverPath}/test.json`, JSON.stringify(interfaces, null, 2))
    Logger.debug('Typescript Interface Initialized.')

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
                                let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
                                interfaceNamesMap[notUniqueInterfaceName] = true
                                propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                            }

                            // Case 2 (Multiple Ref)
                            if(interfaces[interfaceName].properties[propertieName].anyOf){
                                if(typeof propertieTypeMap[propertieName] == 'undefined') propertieTypeMap[propertieName] = []
                                for(let notUniqueInterface of interfaces[interfaceName].properties[propertieName].anyOf){
                                    let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
                                    interfaceNamesMap[notUniqueInterfaceName] = true
                                    propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                                }
                            }
                        }
                        for(let propertieTypeName of Object.keys(interfaceNamesMap)){
                            try{
                                if(interfaceNames.length == 0) interfaceNames += `\n`
                                interfaceNames += `\t${propertieTypeName},\n`
                            }catch(e){ console.log(e) }
                        }

                        // Write Interface
                        if(interfaceNames.length != 0)
                            resolverCode += `import { ${interfaceNames} } from '../../../interface'\n\n`
                    }

                    /**
                     * `resolverCode` [description]
                     */
                    try{
                        if(interfaces[interfaceName].description){
                            // Create Interface Description
                            let resolverDescription = '/**\n'
                            for(let description of interfaces[interfaceName].description.split('\n')){
                                resolverDescription += ` * ${description}\n`
                            }
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
                                // TODO Propertie Description
                                if(interfaces[interfaceName].properties[propertieName].description){
                                    let propertiesDescription = '\t/**\n'
                                    for(let description of interfaces[interfaceName].properties[propertieName].description.split('\n')){
                                        propertiesDescription += `\t * ${description}\n`
                                    }
                                    propertiesDescription += '\t */\n'
                                    valueProperties += propertiesDescription
                                }

                                valueProperties += `\t${propertieName}: ${propertieTypeName}`
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
    console.log('')
    Logger.debug('Entering Type Generate...')
    collectInterfaceFiles(
        `${process.cwd()}/src/${lang}/interface/type/`,
        async (collectedDatas)=>{

            // Create child resolvers
            for(let {
                fileName,
                fileData,
                interfaceName
            } of collectedDatas){
                try{
                    // Create child resolver folder
                    try{ fs.mkdirSync(`${resolverPath}/type`) } catch(e) {}

                    let resolverName = camelCaseToPascalCase(fileName.split('.')[0], false, false)
                    // interfaces[interfaceName].properties
                    let resolverTypes = typeExtractor(fileData)

                    /**
                     * `resolverCode` [export]
                     */
                    let resolverCode = ``

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    Logger.debug(`Created Resolver <type/${fileName}>`)
                    fs.writeFileSync(`${resolverPath}/type/${fileName}`, resolverCode)

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
        fileData: string
        interfaceName: string
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

                try{
                    interfaceName = fileData.split('export interface ')[1].split(' {')[0]
                }catch(e){}

                data.push({
                    fileName: file,
                    filePath,
                    fileData,
                    interfaceName
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

const typeExtractor = (code) => {
    let contexts = code
    contexts = contexts.split('\t').join('')
    contexts = contexts.split('export type ')[1].split('\n')
    contexts.shift()

    let list: any = []
    for(let context of contexts){
        if(context[0] == '=' || context[0] == '|'){
            if(context[1] == ' '){
                context = context.split('= ').join('')
                context = context.split('| ').join('')
                list.push(context)
            }
        }
    }
    return list
}

// Test Only
Generator()