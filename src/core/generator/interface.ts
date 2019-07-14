import FolderLogger from 'folder-logger'
import generatorData from './generator.json'

let loggerTemp = new FolderLogger('./')

export interface IData {
    Logger: typeof loggerTemp
    generatorData: typeof generatorData

    lang: string
    resolverPath?: string

    /**
     * @description
     * `Collects the file name that type matches.`
     * (Doesn't collect file extension)
     */
    preCollectedTypeFileNames: {[key: string]: any}
    interfaces?: {[key: string]: any}
}