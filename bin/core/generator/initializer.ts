import { Resolver } from './resolver'
import { Inject } from '../language/injector/index'
import { getLogger } from './logger'
import { existsSync, copyFileSync, mkdirSync } from 'fs'
import packageData from '../../../package.json'
import { exec } from 'child_process'

export const Generator = async (
    langs = [
        `kor`,
        `eng`,
    ]
) => {
    /**
     * @description
     * Generator Logger
     */
    const Logger = getLogger()

    Logger.debug(`D.VA ENGINE v${packageData.version}`)
    Logger.debug(`Starting initialization sequence...`)

    if(!existsSync(`${process.cwd()}/bin/release`)){
        await Inject(langs)
        await Resolver(langs)
        Logger.debug(`All generator operations succeeded.`)

        Logger.debug(`Starting core typescript files transpile...`)
        await new Promise((resolve)=>{
            exec(`npm run ttsc`, (error, body)=>{
                if(error){
                    Logger.debug(`Body:`)
                    console.log(body)
                    Logger.debug(`Error:`)
                    console.log(error)
                    Logger.debug(`Failed core typescript files transpile.`)
                }else{
                    Logger.debug(`Finished core typescript files transpile.`)
                    resolve()
                }
            })
        })
    }
    try{
        // Create Src Path
        try{ mkdirSync(`${process.cwd()}/src/`) } catch(e){}

        // Create Workshop Default File
        if(existsSync(`${process.cwd()}/preset/script.ts`)
            && !existsSync(`${process.cwd()}/src/script.ts`)){

            copyFileSync(
                `${process.cwd()}/preset/script.ts`,
                `${process.cwd()}/src/script.ts`)
        }
    }catch(e){}
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __filename){
        if(typeof process.argv[2] != 'undefined'){
            Generator(process.argv[2].split(','))
        }else{
            Generator()
        }
    }
}catch(e){}