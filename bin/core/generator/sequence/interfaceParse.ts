import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

/**
 * @description
 * `Interface Parse`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Logger.debug(`[${data.lang.toUpperCase()}] Typescript Interface Initialize...`)
    data.interfaces = await Util.parseInterfaces(`${process.cwd()}/bin/release/${data.lang}/interface/index.ts`)

    // Collected Interfaces write
    // fs.writeFileSync(`${resolverPath}/test.json`, JSON.stringify(interfaces, null, 2))

    Logger.debug(`[${data.lang.toUpperCase()}] Typescript Interface Initialized.`)
    resolve()
})