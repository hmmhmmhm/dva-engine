import { createNewInterface } from './add'
import { getLogger } from '../../generator/logger'

const Logger = getLogger()

try{
    if(`${process.argv[1]}` == __filename){
        if(process.argv.length >= 4){

            // Cloning Array
            let params = JSON.parse(JSON.stringify(process.argv))

            // Remove Script Paths
            params.shift(); params.shift()

            // onGoingGlobal
            let valueName = params.shift()

            //  'Ongoing - Global'
            let valueActualName = params.shift()
            createNewInterface(`Value`, valueName, valueActualName, params)
        }else{
            // INFO MESSAGE
            Logger.debug(`This command generates a new event in the DVA-ENGINE .`)
            Logger.debug(`The command includes a function name consisting of a camel-case,`)
            Logger.debug(`And it should contain the actual workshop`)
            Logger.debug(`grammar name and the name of each params.`)
            console.log(``)
            Logger.debug(`Command Usage:`)
            Logger.debug(`    npm run maintain:value <name> <'actual-name'> <params..>`)
            Logger.debug(`Ex. npm run maintain:value allHeroes 'All Heroes' player value team`)
        }
    }
}catch(e){}