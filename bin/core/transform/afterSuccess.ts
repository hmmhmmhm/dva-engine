import { getLogger } from '../generator/logger'
import { exec } from 'child_process'
import { mkdirSync, writeFileSync } from 'fs'

const Logger = getLogger()
export const resultParse = (result) => {

    // Check Rule Data
    let Rule = result.default
    if(!Rule
        || typeof Rule['collectedCodes'] == 'undefined'
        || !Array.isArray(Rule['collectedCodes'])){

        Logger.debug(`No rule declaration detected.`)
        return
    }

    let collectedCodes: string[] = Rule.collectedCodes

    try{ mkdirSync(`${process.cwd()}/release`) } catch(e) {}
    writeFileSync(`${process.cwd()}/release/script.ows`, collectedCodes.join(`\n\n`))

    console.log(``)
    Logger.debug(`Finished initialization sequence.`)
}

export const clearRequireCache = () => {
    Object.keys(require.cache).forEach((key) => {
        delete require.cache[key]
    })
}

/**
 * Trying Load Script
 */
export const loadUserScript = () => {
    console.log(``)
    Logger.debug(`Load User Script... \t[/src/script.ts]`)

    import(`${process.cwd()}/dist/src/script.js`)
    .then((result) => {
        Logger.debug(`Loaded User Script. \t[/src/script.ts]`)
        resultParse(result)
    })
    .catch((e) => {
        // If failed, Load Example Script
        Logger.debug(`Can't find User Script \t[/src/script.ts]`)
        console.log(``)

        Logger.debug(`Load Test Script... \t[/test/script.ts]`)

        import(`${process.cwd()}/dist/test/script.js`)
            .then((result)=>{
                Logger.debug(`Loaded Test Script. \t[/test/script.ts]`)
                resultParse(result)
            })
            .catch((e)=>{ console.log(e) })
            .finally(clearRequireCache)
    })
    .finally(clearRequireCache)
}

try{
    if(`${process.argv[1]}` == __filename){

        Logger.debug(`Pre Built All User Scripts...`)
        exec('ttsc -p ./tsconfig.extend.json', (error, body)=>{
            if(error){
                Logger.debug(`An error occurred while building.`)
                console.log(error)
                console.log(body)
                return
            }
            loadUserScript()
        })
    }else {
        loadUserScript()
    }
}catch(e){}