import { Sequence } from 'async-sequencer'
import { IData } from './interface'
import * as Util from './util'

import reformerData from './reformerData.json'
import rimraf from 'rimraf'
import fs from 'fs'

/**
 * @description
 * Overwatch Workshop
 * Advanced Scripting Engine
 * Common Grammar Re-former
 */
export default () => {
    return Sequence(async ({resolve, reject, data: preData})=>{

        // Generator Data
        let data: IData = preData
        let { Logger } = data

        // Sequence Logic
        Logger.debug(`[${data.lang.toUpperCase()}] Entering Reform Generator...`)

        // Check overwatch interfaces data is exist
        if(!data.interfaces || data.interfaces == undefined){
            reject()
            return
        }
        
        // Create child resolver folder
        data.reformerPath = `${process.cwd()}/bin/release/${data.lang}/reformer/child/`
        try{ rimraf.sync(data.reformerPath) } catch(e){}
        try{ fs.mkdirSync(data.reformerPath) } catch(e){
            reject()
            return
        }

        for(let interfaceType of Object.keys(reformerData)){
            let interfaceTypePascalCase = Util.camelCaseToPascalCase(interfaceType, false, false)
            let reformCode = ``

            reformCode += `import { Type, Value } from '../../resolver'\n\n`

            reformCode += `class ${interfaceTypePascalCase} {\n`
            reformCode += `\tpublic ${interfaceType}: string\n\n`

            reformCode += `\t/**\n`
            reformCode += `\t * @param ${interfaceType} \`Type.${interfaceTypePascalCase}.\` 를 입력하면\n`
            reformCode += `\t *   여기서 사용 가능한 함수를 확인할 수 있습니다.\n`
            reformCode += `\t */\n`

            // Write Constructor Init
            let constructorInit = ``
            if(typeof reformerData[interfaceType]['constructorInit'] != 'undefined')
                constructorInit = ` = ${reformerData[interfaceType]['constructorInit']}`

            reformCode += `\tconstructor(${interfaceType}: string${constructorInit}){\n\t\tthis.${interfaceType} = ${interfaceType}\n\t}\n`

            if(typeof reformerData[interfaceType]['independent'] != 'undefined')
                reformerData[interfaceType]['dependent'] = 
                    reformerData[interfaceType]['dependent'].concat(reformerData[interfaceType]['independent'])

            for(let dependent of reformerData[interfaceType]['dependent']){
                let interfaceName = `I${Util.camelCaseToPascalCase(dependent, false, false)}`
                let innerFunctionCode = ``

                // Function Description
                try{
                    if(data.interfaces[interfaceName].description){
                        innerFunctionCode += `\n\t/**\n`
                        for(let description of data.interfaces[interfaceName].description.split('\n'))
                        innerFunctionCode += `\t * ${description}\n`
                            innerFunctionCode += `\t */\n`
                    }
                }catch(e){}

                // Function Properties Check
                let isPropertiesExist = false
                let isAdditionalPropertiesExist = false
                try{
                    isPropertiesExist =
                        data.interfaces[interfaceName].properties
                        && Object.keys(data.interfaces[interfaceName].properties).length != 0

                    let actualPropertiesCount = Object.keys(data.interfaces[interfaceName].properties).length
                    for(let propertieName of Object.keys(data.interfaces[interfaceName].properties))
                        if(propertieName == interfaceType) actualPropertiesCount--

                    isAdditionalPropertiesExist =
                        data.interfaces[interfaceName].properties
                        && actualPropertiesCount > 0
                }catch(e){}

                // Function Define
                innerFunctionCode += `\t`
                
                let isIndependent = false
                if(typeof reformerData[interfaceType]['independent'] != 'undefined'){
                    if(reformerData[interfaceType]['independent'].indexOf(dependent) != -1){
                        isIndependent = true
                        innerFunctionCode += `$$static$$`
                    }
                }
                // reformerData[interfaceType]['independent']
                innerFunctionCode += `$$dependent$$(${isAdditionalPropertiesExist? '\n' : ''}`

                // Collect Function Linking Data
                let functionParamLinkingCodes: string[] = []

                // Function Properties
                if(isPropertiesExist){
                    let propertiesCodes: string[] = []
                    for(let propertieName of Object.keys(data.interfaces[interfaceName].properties)){

                        // Except Default Param
                        if(propertieName == interfaceType){

                            // Collect Function Linking Data
                            functionParamLinkingCodes.push(`this.${interfaceType}`)
                            continue
                        }

                        // Function Properties Description
                        let propertiesCode = ``
                        if(data.interfaces[interfaceName].properties[propertieName].description){
                            propertiesCode += `\t\t/**\n`
                            for(let description of data.interfaces[interfaceName].properties[propertieName].description.split('\n'))
                                propertiesCode += `\t\t * ${description}\n`

                            // Function Properties Type Description
                            if(typeof data.interfaces[interfaceName].properties[propertieName]['$ref'] != 'undefined'){
                                let notUniqueInterface = data.interfaces[interfaceName].properties[propertieName]
                                let propertieTypeName = String(notUniqueInterface.$ref).split('#/definitions/')[1]
    
                                /**
                                 * Convert Type Name `ValueArrayType` To `Array`
                                 */
                                propertieTypeName = Util.pureTypeNameExtractor(propertieTypeName)
                                propertiesCode += `\t\t * - \`Type.${propertieTypeName}.\` 를 입력하면 \n`
                                propertiesCode += `\t\t *   여기서 사용 가능한 함수를 확인할 수 있습니다.\n`
                            }
                            propertiesCode += `\t\t */\n`
                        }

                        // Function Properties Define
                        propertiesCode += `\t\t${propertieName}: string`
                        propertiesCodes.push(propertiesCode)

                        // Collect Function Linking Data
                        functionParamLinkingCodes.push(propertieName)
                    }

                    innerFunctionCode += propertiesCodes.join(`,\n`)
                }
                innerFunctionCode += `${isAdditionalPropertiesExist? '\n\t' : ''}){\n`

                // Function Linking
                innerFunctionCode += `\t\treturn Value.${dependent}(${functionParamLinkingCodes.join(', ')})\n`
                innerFunctionCode += `\t}\n`

                if(isIndependent){
                    let dependentPascalCase = dependent.split('')
                    dependentPascalCase[0] = dependentPascalCase[0].toUpperCase()
                    dependentPascalCase = dependentPascalCase.join('')

                    reformCode += innerFunctionCode
                        .replace('$$static$$', 'static ')
                        .replace('$$dependent$$', `${dependentPascalCase}`)
                    reformCode += innerFunctionCode
                        .replace('$$static$$', '')
                        .replace('$$dependent$$', `${dependent}`)
                }else{
                    reformCode += innerFunctionCode
                        .replace('$$dependent$$', `${dependent}`)
                }
            }

            reformCode += `}\n\nexport default ${interfaceTypePascalCase}`
            Logger.debug(`[${data.lang.toUpperCase()}] Created Reformer <${interfaceType.toLowerCase()}.ts>`)
            fs.writeFileSync(`${data.reformerPath}/${interfaceType.toLowerCase()}.ts`, reformCode)
        }

        let indexCode = ``
        for(let interfaceType of Object.keys(reformerData))
            indexCode += `export * from './${interfaceType}'\n`
        fs.writeFileSync(`${data.reformerPath}/index.ts`, indexCode)
        Logger.debug(`[${data.lang.toUpperCase()}] Created Reformer Index <index.ts>`)

        resolve()
    })
}