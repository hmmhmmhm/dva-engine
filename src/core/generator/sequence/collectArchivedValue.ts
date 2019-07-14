import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

import fs from 'fs'

const interfaceType
    : 'event' | 'action' | 'value'
    = `action`

/**
 * @description
 * `Archived Value Function Collector`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Util.collectInterfaceFiles(
        `${process.cwd()}/src/${data.lang}/interface/${interfaceType}/child`,
        async (collectedDatas)=>{

            // Create child resolvers
            let json = {}
            for(let {
                fileName,
                interfaceName
            } of collectedDatas){

                json[fileName] = Util.camelCaseToPascalCase(interfaceName, true, true)
            }
            fs.writeFileSync(`${data.resolverPath}/test.json`, JSON.stringify(json, null, 2))
            Logger.debug(`Successfully Collected test.json Data.`)
        }
    )

    resolve()
})