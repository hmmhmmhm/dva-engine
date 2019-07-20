import { Resolver } from './resolver'
import { Inject } from '../language/injector/index'

import FolderLogger from 'folder-logger'
import tempDir from 'temp-dir'

export const Generator = async (
    langs = [
        'kor'
    ]
) => {
    /**
     * @description
     * Generator Logger
     */
    const Logger = new FolderLogger(tempDir)

    await Inject(langs)
    await Resolver(langs)
    
    Logger.debug(`All generator operations succeeded.`)
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __dirname){
        if(typeof process.argv[2] != 'undefined'){
            Generator(process.argv[2].split(','))
        }else{
            Generator()
        }
    }
}catch(e){}