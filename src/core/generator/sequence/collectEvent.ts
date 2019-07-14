import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

import fs from 'fs'

/**
 * @description
 * `Collect Event`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Logger.debug('Entering Event Generate...')
    Util.collectInterfaceFiles(
        `${process.cwd()}/src/${data.lang}/interface/event/child`,
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
                    try{ fs.mkdirSync(`${data.resolverPath}/event`) } catch(e) {}

                    let isPropertiesExist =
                        data.interfaces[interfaceName].properties
                        && data.interfaces[interfaceName].properties.length != 0

                    let eventName = data.generatorData['event']['eventName'][fileName]

                    /**
                     * `resolverCode` [import]
                     */
                    let resolverCode = ``
                    if(isPropertiesExist) resolverCode += `import { ${interfaceName} } from '../../../interface'\n\n`

                    /**
                     * `resolverCode` [description]
                     */
                    let resolverDescription = '/**\n'
                    for(let description of data.interfaces[interfaceName].description.split('\n')){
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
                        for(let propertie of Object.keys(data.interfaces[interfaceName].properties))
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
                    fs.writeFileSync(`${data.resolverPath}/event/${fileName}`, resolverCode)

                }catch(e){
                    Logger.critical('Generator Crashed#1')
                    console.log(e)
                    reject()
                    return
                }
            }

            // Create child index
            let indexCode = ''
            for(let { fileName } of collectedDatas)
                indexCode += `export * from './${fileName.split('.')[0]}'\n`
            fs.writeFileSync(`${data.resolverPath}/event/index.ts`, indexCode)
            Logger.debug('Created Event Resolver <event/index.ts>')
        }
    )

    resolve()
})