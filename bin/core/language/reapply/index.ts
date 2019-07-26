import rimraf from 'rimraf'
import fs from 'fs-extra'
import { getLogger } from '../../generator/logger'

export const Reapply = (langs = [`kor`]) => {
    const Logger = getLogger()

    for(let lang of langs){
        let langId = `[${lang.toUpperCase()}]`

        Logger.debug(`${langId} RE-APPLYING...`)

        // Remove Folder
        try{ rimraf.sync(`bin/core/engine/interface`) }
            catch(e){ Logger.warn(`${langId} NO EXTRACTED INTERFACE DATA`) }

        try{ rimraf.sync(`bin/core/engine/type`) }
            catch(e){ Logger.warn(`${langId} NO EXTRACTED TYPE DATA`) }

        // Remove File
        try{ rimraf.sync(`bin/core/language/data/kor.json`) }
            catch(e){ Logger.warn(`${langId} NO EXTRACTED LANGUAGE DATA`) }

        // Copy Paste
        try{ fs.copySync(`bin/dist/_extracted/interface`, `bin/core/engine/interface`) }
            catch(e){ Logger.warn(`${langId} FAILED COPYING INTERFACE DATA`); console.log(e) }

        try{ fs.copySync(`bin/dist/_extracted/type`, `bin/core/engine/type`) }
            catch(e){ Logger.warn(`${langId} FAILED COPYING TYPE DATA`); console.log(e) }

        try{ fs.copySync(`bin/dist/_extracted/${lang}.json`, `bin/core/language/data/${lang}.json`) }
            catch(e){ Logger.warn(`${langId} FAILED COPYING LANGUAGE DATA`); console.log(e) }

        Logger.debug(`${langId} RE-APPLIED!`)
    }
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __dirname){
        let option = process.argv[2]
        ;(async ()=>{
            await Reapply()
            const Logger = getLogger()

            console.log(``)
            Logger.debug(`ALL LANGUAGE FILES RE-APPLIED!`)
        })()
    }
}catch(e){}