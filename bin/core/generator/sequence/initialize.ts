import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import rimraf from 'rimraf'
import fs from 'fs'

/**
 * @description
 * `Initialize`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    Logger.debug('Running on Generator Initialize Sequence...')
    Logger.debug('Delete all previously generated Resolver codes...')

    data.resolverPath = `${process.cwd()}/bin/${data.lang}/resolver/child/`
    try{ rimraf.sync(data.resolverPath) } catch(e){}
    try{ fs.mkdirSync(data.resolverPath) } catch(e){
        reject()
        return
    }

    resolve()
})