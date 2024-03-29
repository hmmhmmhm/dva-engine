import { Sequencer } from 'async-sequencer'
import { IData } from './interface'
import { getLogger } from './logger'

import Reformer from './reformer'
import Generator from './generator'
import { readFileSync, writeFileSync } from 'fs'


/**
 * @description
 * Generator Resolver
 */
export const Resolver = async (langs: string[] = [ 'kor' ]) => {
    /**
     * @description
     * Generator Logger
     */
    const Logger = getLogger()

    for(let lang of langs){

        // IF USING REQUIRE, IT CAN BE MAKES CONFLICT.
        let generatorData = JSON.parse(String(readFileSync(`${__dirname}/generatorData.json`)))

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
        await Sequencer(

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
                    Logger.critical(`[${lang.toUpperCase()}] Sequence #${sequenceNumber} has been crashed.`)
                    return
                }

                if(isEndOfSequence)
                    Logger.debug(`[${lang.toUpperCase()}] Generate succeeded.\n\n`)
            }

        , sequencerData)
    }
}