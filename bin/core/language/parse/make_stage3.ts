import stage2 from './value_stage2.json'
import additional from './value_stage3_additional.json'
import values from './value_stage3_reference.json'
import { writeFileSync } from 'fs'
import { getLogger } from '../../generator/logger'
import { splitter } from './make_stage2'

let Logger = getLogger()

// CLONE DATA
let stage3 = JSON.parse(JSON.stringify(values))

// NO BINDED ITEM CHECK
let bindCheckMap = {}
for(let stage2Item of stage2){
    bindCheckMap[`${stage2Item.name}[0]`] = true
    for(let defIndex in stage2Item.definitions){
        let defIndexNum = Number(defIndex)+1
        bindCheckMap[`${stage2Item.name}[${defIndexNum}]`] = true
    }
}

let foundedValuesIndexMap: string[] = []
for(let stage2Item of stage2){

    // stage2Item.name
    // stage2Item.contexts
    // stage2Item.definitions

    // Blizzard Exception
    stage2Item.name = stage2Item.name.replace(` - New!`, ``)
    if(stage2Item.name.indexOf(` - `) == -1)
        stage2Item.name = stage2Item.name.replace(`-`, ` `)
    if(stage2Item.name == `SET GLOBAL VARIABLE INDEX`)
        stage2Item.name = `SET GLOBAL VARIABLE AT INDEX`
    if(stage2Item.name == `LOOP IF CONDITION IF FALSE`)
        stage2Item.name = `LOOP IF CONDITION IS FALSE`
    if(stage2Item.name == `LOOP IF CONDITION IF TRUE`)
        stage2Item.name = `LOOP IF CONDITION IS TRUE`

    let isMatchFounded = false
    for(let valuesIndex of Object.keys(values)){
        if(typeof values[valuesIndex]['usedFiles'] == 'undefined')
            continue

        for(let usedFile of values[valuesIndex].usedFiles){

            // MATCH
            if(String(usedFile.topName).toLowerCase() == stage2Item.name.toLowerCase()){
                let orderNumber = Number(usedFile.orderNumber)

                // GET TRANSLATED CONTEXT
                let translatedContext: any = undefined
                try{
                    if(orderNumber == 0){
                        if(stage2Item.contexts.length != 0)
                            translatedContext = stage2Item.contexts
                    }else{
                        translatedContext = stage2Item.definitions[orderNumber - 1]
                    }
                }catch(e){}

                // CHANGE STAGE 3 DATA
                if(translatedContext === undefined){
                    Logger.warn(`MISSING SOURCE FILE COMMENT ID: ${stage2Item.name}[${orderNumber}]`)
                }else{
                    // CHANGE
                    if(!isMatchFounded) isMatchFounded = true
                    foundedValuesIndexMap.push(valuesIndex)
                    stage3[valuesIndex].contexts = translatedContext
                }
            }
        }
    }

    if(!isMatchFounded)
        Logger.debug(`NO USED STAGE2 KEY (MIGHT BE WRONG NAME OR DEPRECATED NAME): ${stage2Item.name}`)
}

console.log(``)
for(let valuesIndex of Object.keys(values)){
    if(valuesIndex == '_file') continue
    if(foundedValuesIndexMap.indexOf(valuesIndex) == -1){

        // ADDITIONAL
        let isAdditionalDataExist = false
        for(let usedFile of values[valuesIndex].usedFiles){
            //
            if(typeof additional[`${usedFile.topName}/${usedFile.orderNumber}`] != `undefined`){
                // Logger.debug(`TRANSLATE REPLACED-> ID:${valuesIndex} (${usedFile.topName}/${usedFile.orderNumber})`)
                stage3[valuesIndex].contexts =
                    splitter(additional[`${usedFile.topName}/${usedFile.orderNumber}`].join(`\n`))
                isAdditionalDataExist = true
            }
        }
        
        if(!isAdditionalDataExist){
            Logger.warn(`MISSING REF TRANSLATE-> ID:${valuesIndex}`)
            for(let usedFile of values[valuesIndex].usedFiles)
                Logger.warn(`\t${String(usedFile.topName)}[${usedFile.orderNumber}]\t${usedFile.path}`)
        }
    }
}

writeFileSync(`${__dirname}/value_stage3.json`, JSON.stringify(stage3, null, 2))