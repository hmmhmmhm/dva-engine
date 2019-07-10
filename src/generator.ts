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
    Logger.debug('Typescript Interface Initialized.')

    /**
     * @description
     * `Event Collect`
     */
    Logger.debug('\nEntering Event Generate...')
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
                    let resolverCode = `import { ${interfaceName} } from '../../../interface'\n\n`

                    /**
                     * `resolverCode` [description]
                     */
                    let resolverDescription = `/**\n`
                    for(let description of interfaces[interfaceName].description.split('\n')){
                        resolverDescription += ` * ${description}\n`
                    }
                    resolverDescription += ` */\n`
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
                    if(interfaces[interfaceName].properties
                        && interfaces[interfaceName].properties.length != 0){

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
            let indexCode = ``
            for(let { fileName } of collectedDatas)
                indexCode += `export * from './${fileName.split('.')[0]}'\n`
            fs.writeFileSync(`${resolverPath}/event/index.ts`, indexCode)
            Logger.debug(`Created Event Resolver <event/index.ts>`)
        }
    )

    /**
     * @description
     * `Value Collect`
     */
}

/**
 * @description
 * Built-in Time Typescript Interface Parser
 */
const parseInterfaces = async ( filePath: string) => {
    const settings: TJS.PartialArgs = { required: true }
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
const collectInterfaceFiles = async (
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

                /**
                 * @description
                 * Yes Its Hardcoding..'~'
                 */
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

const camelCaseToPascalCase = (name: string, doSpace = true)=>{
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

// Test Only
Generator()