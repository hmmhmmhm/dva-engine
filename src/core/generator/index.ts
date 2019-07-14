import { Sequencer } from 'async-sequencer'
import FolderLogger from 'folder-logger'
import { IData } from './interface'
import generatorData from './generator.json'

import tempDir from 'temp-dir'

/**
 * @description
 * Resolver Generator
 */
export const Generator = async (lang = 'kor') => {

    /**
     * @description
     * Generator Logger
     */
    const Logger = new FolderLogger(tempDir)

    /**
     * @description
     * Common Generator Data
     */
    let sequencerData: IData = {
        Logger,
        lang,
        preCollectedTypeFileNames: {},
        generatorData
    }

    /**
     * @description
     * Generator Sequencer
     */
    Sequencer(

        // Sequence List
        [
            require('./sequence/initialize'),
            require('./sequence/interfaceParse'),

            // Debug-Only
            // require('./sequence/collectArchivedValue'),

            require('./sequence/collectPreTypeNames'),
            require('./sequence/collectEvent'),
            require('./sequence/collectValue'),
            require('./sequence/collectType'),
        ],

        // Sequence Callback
        ({
            sequenceNumber,
            isSequenceSuccess,
            isEndOfSequence,
            sequenceResult
        })=>{
    
            console.log('')

            // Callback Logic
            if(!isSequenceSuccess){
                Logger.critical(`Sequence #${sequenceNumber} has been crashed.`)
                return
            }

            if(isEndOfSequence)
                Logger.debug(`All generator operations succeeded.`)
        }
    
    , sequencerData)
}

Generator()