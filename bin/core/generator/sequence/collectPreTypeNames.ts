import { Sequence } from 'async-sequencer'
import { IData } from '../interface'
import * as Util from '../util'

/**
 * @description
 * `Collect Pre Type Names`
 */
export default Sequence(async ({resolve, reject, data: preData})=>{

    // Generator Data
    let data: IData = preData
    let { Logger } = data

    // Sequence Logic
    await Util.collectInterfaceFiles(
        `${process.cwd()}/bin/release/${data.lang}/type/`,

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
                    data.preCollectedTypeFileNames[typeName] = `${fileName.split('.')[0]}`
                }else{
                    Logger.warn(`[${data.lang.toUpperCase()}] Failed to find type of fileName: ${fileName}`)
                }
            }
        }
    )

    Logger.debug(`[${data.lang.toUpperCase()}] Collected Overwatch Type Data.`)
    resolve()
})