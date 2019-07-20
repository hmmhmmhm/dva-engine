import FolderLogger from 'folder-logger'
import { Sequencer } from 'async-sequencer'
import { IData } from './interface'

import Reformer from './reformer'
import Generator from './generator'
import generatorData from './generatorData.json'


import tempDir from 'temp-dir'

/**
 * @description
 * Generator Resolver
 */
export const Resolver = async (lang = 'kor') => {

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
        preCollectedTypes: {},
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
            require('./sequence/collectType'),

            Generator({
                interfacePath: `interface/event/child`,
                interfaceType: 'Event'
            }),

            Generator({
                interfacePath: `interface/value/child`,
                interfaceType: 'Value'
            }),

            Generator({
                interfacePath: `interface/action/child`,
                interfaceType: 'Action'
            }),

            Reformer(),
        ],

        // Sequence Callback
        ({
            sequenceNumber,
            isSequenceSuccess,
            isEndOfSequence
        })=>{

            // Enter the CLI output for each sequence.
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

Resolver()