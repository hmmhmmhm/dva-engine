import { getLogger } from '../generator/logger'
import { exec } from 'child_process';

/**
 * @TODO
 * Write .ows file.
 */
const Logger = getLogger()
exec('ttsc -p ./tsconfig.extend.json', (error, body)=>{
    if(error){
        Logger.debug(`An error occurred while building.`)
        console.log(error)
        console.log(body)
    }else{
        // Trying Load Script
        Logger.debug(`Load User Script... ./src/script.ts`)

        import(`${process.cwd()}/dist/src/script.js`)
        .then((value)=>{
            Logger.debug(`Loaded User Script. ./src/script.ts`)
        })
        .catch((e)=>{
            // If failed, Load Example Script
            Logger.debug(`Can't find User Script ./src/script.ts`)
            console.log(``)

            Logger.debug(`Load Test Script... ./test/script.ts`)
            import(`${process.cwd()}/dist/test/script.js`)
        })
        console.log(``)
        Logger.debug(`Finished initialization sequence.`)
    }
})