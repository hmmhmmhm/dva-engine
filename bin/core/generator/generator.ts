import { Sequence } from 'async-sequencer'
import { IData } from './interface'
import * as Util from './util'

import fs from 'fs'

/**
 * @description
 * Overwatch Workshop
 * Common Generator
 */
export default ({
    interfacePath,
    interfaceType
}: {
    interfacePath: string
    interfaceType: string
}) => {
    return Sequence(async ({resolve, reject, data: preData})=>{

        // Generator Data
        let data: IData = preData
        let { Logger } = data
    
        // Sequence Logic
        Logger.debug(`[${data.lang.toUpperCase()}] Entering ${interfaceType} Generate...`)
        Util.collectInterfaceFiles(
            `${process.cwd()}/bin/release/${data.lang}/${interfacePath}`,
            async (collectedDatas) => {

                // Create child resolvers
                for(let {
                    fileName,
                    interfaceName
                } of collectedDatas){

                    // Check overwatch interfaces data is exist
                    if(!data.interfaces || data.interfaces == undefined){
                        reject()
                        return
                    }

                    // Create child resolver folder
                    try{ fs.mkdirSync(`${data.resolverPath}/${interfaceType.toLowerCase()}`) } catch(e) {}

                    // Check is interface have properties
                    let isPropertiesExist = false
                    try{
                        isPropertiesExist =
                            data.interfaces[interfaceName].properties
                            && data.interfaces[interfaceName].properties.length != 0
                    }catch(e){}

                    // Get overwatch method name (pacal case)
                    let valueName = 
                        data.generatorData
                            [interfaceType.toLowerCase()]
                            [`${interfaceType.toLowerCase()}Name`]
                            [fileName]

                    /**
                     * `resolverCode`
                     */
                    let resolverCode = ``

                    // Create External Type Import
                    // if(isPropertiesExist) resolverCode += `import { ${interfaceName} } from '../../../interface'\n\n`

                    /**
                     * @description
                     * `propertieTypeMap` is store every properties type names.
                     */
                    let propertieTypeMap = {}
                    if(isPropertiesExist){
    
                        /**
                         * @deprecated
                         * Collect Import Target
                         */
                        // let interfaceNamesMap = {}
    
                        /**
                         * @description
                         * Collect all unique interface name
                         * (All type will be converted interface)
                         */
                        for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){
    
                            /**
                             * Case 1 (Single Ref)
                             * @example 'ValueArrayType'
                             */
                            if(typeof data.interfaces[interfaceName].properties[propertieName]['$ref'] != 'undefined'){
                                if(typeof propertieTypeMap[propertieName] == 'undefined') propertieTypeMap[propertieName] = []
                                let notUniqueInterface = data.interfaces[interfaceName].properties[propertieName]
    
                                let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
    
                                /**
                                 * Convert Type Name `ValueArrayType` To `Array`
                                 */
                                notUniqueInterfaceName = Util.pureTypeNameExtractor(notUniqueInterfaceName)
    
                                /**
                                 * @deprecated
                                 * Collect Import Target
                                 */
                                // interfaceNamesMap[notUniqueInterfaceName] = true
                                propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                            }
    
                            /**
                             * Case 2 (Multiple Ref)
                             * @example 'ValueArrayType' | 'ValueNumberType'
                             */
                            if(data.interfaces[interfaceName].properties[propertieName].anyOf){
    
                                Logger.warn(`[${data.lang.toUpperCase()}] Please don't be use multiple type reference in properties (${interfaceType.toLowerCase()}/${fileName})`)
    
                                /**
                                 * @deprecated
                                 * Collect Import Target
                                 */
    
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
    
                        /**
                         * @deprecated
                         * Write External Type Import
                         */
    
                        /*
                        let interfaceNames = ``
                        for(let propertieTypeName of Object.keys(interfaceNamesMap)){
                            try{
                                if(interfaceNames.length == 0) interfaceNames += `\n`
                                interfaceNames += `\t${propertieTypeName},\n`
                            }catch(e){ console.log(e) }
                        }
                        if(interfaceNames.length != 0){
                            resolverCode += `import { ${interfaceNames} } from '../../../interface'\n\n`
                        }
                        */
                    }
    
                    /**
                     * `resolverCode` [description]
                     */
                    try{
                        if(data.interfaces[interfaceName].description){
    
                            // Create Interface Description
                            let resolverDescription = '/**\n'
                            for(let description of data.interfaces[interfaceName].description.split('\n'))
                                resolverDescription += ` * ${description}\n`
                            resolverDescription += ' */\n'
                            resolverCode += resolverDescription
                        }
                    }catch(e){}
    
                    /**
                     * `resolverCode` [export]
                     */
                    let resolverName = fileName.split('.')[0]
                    try{
                        if(typeof data.generatorData[interfaceType.toLowerCase()]['methodNameReplace'][resolverName] != 'undefined')
                            resolverName = data.generatorData[interfaceType.toLowerCase()]['methodNameReplace'][resolverName]
                    }catch(e){}
    
                    // Values Collect
                    let valueProperties = ``
                    if(isPropertiesExist){
                        for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){
                            try{
                                //let propertieTypeName = interfaces[interfaceName].properties[propertieName].type
    
                                let propertieTypeName = ``
                                if(typeof propertieTypeMap[propertieName] != 'undefined'){
                                    if(propertieTypeMap[propertieName].length > 1)
                                        Logger.critical(`[${data.lang.toUpperCase()}] [TYPE BROKEN ALERT] Multiple Types in Propertie! (${interfaceType.toLowerCase()}/${fileName})`)
                                    propertieTypeName = propertieTypeMap[propertieName].join(' | ')
                                }else{
                                    // Allow Default Data Type
                                    try{
                                        propertieTypeName = data.interfaces[interfaceName].properties[propertieName].type
                                    }catch(e){
                                        Logger.critical(`[${data.lang.toUpperCase()}] Unexpected Interface Param Type! (${interfaceType.toLowerCase()}/${fileName})`)
                                        console.log(data.interfaces[interfaceName].properties[propertieName])
                                    }
                                }
                                valueProperties += (valueProperties.length == 0) ? `\n` : `,\n`
    
                                /**
                                 * `Insert Propertie Description`
                                 */
                                let propertiesDescription = '\t/**\n'
                                if(data.interfaces[interfaceName].properties[propertieName].description)
                                    for(let description of data.interfaces[interfaceName].properties[propertieName].description.split('\n'))
                                        propertiesDescription += `\t * ${description}\n`
    
                                /**
                                 * `Insert Propertie Type Reference By JSDoc`
                                 */
                                let typescriptTypeList = ['number']
                                if(typescriptTypeList.indexOf(propertieTypeName) == -1)
                                    propertiesDescription += `\t * - \`Type.${propertieTypeName}.\`\n`

                                propertiesDescription += '\t */\n'
                                valueProperties += propertiesDescription
    
                                if(typescriptTypeList.indexOf(propertieTypeName) == -1){
                                    valueProperties += `\t${propertieName}: string | number | any[]`
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
                        let properties = Object.keys(data.interfaces[interfaceName].properties)
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

                    /**
                     * `Collect Additional Value Resolver`
                     */
                    if(interfaceType == 'Value' && typeof data.preCollectedTypes[resolverName] != 'undefined'){

                        /**
                         * `Modify Resolver Return Type to Array`
                         */
                        if(data.preCollectedTypes[resolverName].indexOf('array') != -1){
                            resolverCode = `${resolverCode.replace(`) => {`, `): any[] => {`)}\n\n`
                            resolverCode = resolverCode.replace(`\n\treturn `,`\n\t// @ts-ignore\n\treturn `)

                        /**
                         * `Modify Resolver Return Type to Number`
                         */
                        } else if(data.preCollectedTypes[resolverName].indexOf('number') != -1
                            || data.preCollectedTypes[resolverName].indexOf('vector') != -1){

                            resolverCode = `${resolverCode.replace(`) => {`, `): number => {`)}\n\n`
                            resolverCode = resolverCode.replace(`\n\treturn `,`\n\t// @ts-ignore\n\treturn `)
                        }
                    }

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    Logger.debug(`[${data.lang.toUpperCase()}] Created Resolver <${interfaceType.toLowerCase()}/${fileName}>`)
                    fs.writeFileSync(`${data.resolverPath}/${interfaceType.toLowerCase()}/${fileName}`, resolverCode)
                }

                /**
                 * `Create child index`
                 */
                let indexCode = ''
                for(let { fileName } of collectedDatas)
                    indexCode += `export * from './${fileName.split('.')[0]}'\n`
                fs.writeFileSync(`${data.resolverPath}/${interfaceType.toLowerCase()}/index.ts`, indexCode)
                Logger.debug(`[${data.lang.toUpperCase()}] Created Resolver Index <${interfaceType.toLowerCase()}/index.ts>`)
            }
        )
    
        resolve()
    })
}