import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

import fs from 'fs'

/**
 * @description
 * `Collect Value`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Logger.debug('Entering Value Generate...')
    Util.collectInterfaceFiles(
        `${process.cwd()}/src/${data.lang}/interface/value/child`,
        async (collectedDatas)=>{

            // Create child resolvers
            for(let {
                fileName,
                interfaceName
            } of collectedDatas){
                try{

                    // Check Interface Is Exist
                    if(!data.interfaces || data.interfaces == undefined){
                        reject()
                        return
                    }

                    // Create child resolver folder
                    try{ fs.mkdirSync(`${data.resolverPath}/value`) } catch(e) {}

                    let isPropertiesExist = false
                    try{
                        isPropertiesExist =
                            data.interfaces[interfaceName].properties
                            && data.interfaces[interfaceName].properties.length != 0
                    }catch(e){}

                    let valueName = data.generatorData['value']['valueName'][fileName]

                    /**
                     * `resolverCode` [import]
                     */
                    let resolverCode = ``

                    // Create External Type Import
                    // if(isPropertiesExist) resolverCode += `import { ${interfaceName} } from '../../../interface'\n\n`

                    let propertieTypeMap = {}
                    if(isPropertiesExist){
                        let interfaceNames = ``
                        let interfaceNamesMap = {}

                        // Collect All Unique Interface (All type will be converted interface)
                        for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){

                            // Case 1 (Single Ref)
                            if(typeof data.interfaces[interfaceName].properties[propertieName]['$ref'] != 'undefined'){
                                if(typeof propertieTypeMap[propertieName] == 'undefined') propertieTypeMap[propertieName] = []
                                let notUniqueInterface = data.interfaces[interfaceName].properties[propertieName]

                                let notUniqueInterfaceName = String(notUniqueInterface.$ref).split('#/definitions/')[1]

                                // ValueArrayType -> Array
                                notUniqueInterfaceName = Util.pureTypeNameExtractor(notUniqueInterfaceName)

                                interfaceNamesMap[notUniqueInterfaceName] = true
                                propertieTypeMap[propertieName].push(notUniqueInterfaceName)
                            }

                            // Case 2 (Multiple Ref)
                            if(data.interfaces[interfaceName].properties[propertieName].anyOf){

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

                        // Write External Type Import
                        // if(interfaceNames.length != 0){
                        //     resolverCode += `import { ${interfaceNames} } from '../../../interface'\n\n`
                        // }
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
                    if(typeof data.generatorData['value']['methodNameReplace'][resolverName] != 'undefined')
                        resolverName = data.generatorData['value']['methodNameReplace'][resolverName]

                    // Values Collect
                    let valueProperties = ``
                    if(isPropertiesExist){
                        for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){
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
                                        propertieTypeName = data.interfaces[interfaceName].properties[propertieName].type
                                    }catch(e){
                                        Logger.critical(`Unexpected Interface Param Type! (value/${fileName})`)
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

                    // console.log(`${fileName}, ${interfaceName}`)
                    // console.log(interfaces[interfaceName])
                    // console.log(resolverCode)

                    Logger.debug(`Created Resolver <value/${fileName}>`)
                    fs.writeFileSync(`${data.resolverPath}/value/${fileName}`, resolverCode)

                }catch(e){
                    Logger.critical('Generator Crashed#1')
                    console.log(e)
                }
            }

            // Create child index
            let indexCode = ''
            for(let { fileName } of collectedDatas)
                indexCode += `export * from './${fileName.split('.')[0]}'\n`
            fs.writeFileSync(`${data.resolverPath}/value/index.ts`, indexCode)
            Logger.debug('Created Value Resolver <value/index.ts>')
        }
    )

    resolve()
})