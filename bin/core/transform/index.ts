import * as ts from 'typescript'
import * as path from 'path'
import { Hook } from './hook'
import Helper from './helper'

const data: {
    srcPath: string
    interfaceVaraible?: ts.Identifier
    interfaceVaraibleIsHoisted: boolean
} = {
    srcPath: path.resolve(`${process.cwd()}/src`),
    interfaceVaraibleIsHoisted: false
}

export default Hook({
    initialize: ({
        program,
        sourceFile,
        ctx
    }) => {

        // Create unique variable name in source file
        data.interfaceVaraible = ts.createUniqueName('interface')
    },

    context: ({
        program,
        sourceFile,
        node,
        ctx
    }) => {
        // Data Check
        if(!data.interfaceVaraible) return

        // Overload only src folder codes
        let filePath = path.resolve(sourceFile.fileName)
        if(filePath.indexOf(data.srcPath) == -1) return

        /**
         * @description
         * Operator Overload
         * - Compare Function (Binary Expression)
         *   - Rule Condition
         *   - Value Condition
         */
        let overrideContext =
            Helper.compareOverride(
                node, data.interfaceVaraible)

        if(overrideContext){
            // Check interface is used
            data.interfaceVaraibleIsHoisted = true
            return overrideContext
        }

        /**
         * @description
         * Operator Overload
         * - Compare Function (Binary Expression)
         *   - Rule Condition
         *   - Value Condition
         */
        if(ts['isUnaryExpression'](node)){
            // To Unary Rule Condition Definition Support
            if(Helper.checkNodeIsTopCondition(node)){
                let symbol = program.getTypeChecker().getSymbolAtLocation(node)

                if(symbol != undefined){
                    if(ts.isVariableDeclaration(symbol.valueDeclaration)){
                        if(symbol.valueDeclaration.initializer != undefined){
                            console.log(symbol.valueDeclaration.initializer.getText())
                            console.log(ts.isBinaryExpression(symbol.valueDeclaration.initializer))

                            let overrideContext = 
                                Helper.compareOverride(
                                    symbol.valueDeclaration.initializer,
                                    data.interfaceVaraible,
                                    true // Fore Apply Top Condition
                                )

                            if(overrideContext){
                                // Check interface is used
                                data.interfaceVaraibleIsHoisted = true
                                return overrideContext
                            }
                        }
                    }
                }
            }
        }

        /*
        Helper.binaryExpressionDisassemble(node, (assembles, collection) => {
            console.log('COLLECTED!')
            for(let collectedItem of collection){
                console.log(`collectedItem: ${collectedItem.getText()}`)
            }
            for(let assemble of assembles){
                console.log(`assemble: ${assemble.getText()}`)
            }
        })
        */

        return
    },

    file: ({
        program,
        sourceFile,
        ctx
    }) => {
        // Data Check
        if(!data.interfaceVaraible) return

        /**
         * @description
         * 1. Import Interface File
         */
        if(data.interfaceVaraibleIsHoisted){
            let filePath = path.resolve(sourceFile.fileName)
            let subCount = filePath.replace(data.srcPath, '').split(path.sep).length - 2

            // Create Module Path
            let modulePath = ``
            for(let i= 0; i<= subCount; i++) modulePath += `../`
            modulePath = `${modulePath}bin/kor`

            // Require Statement
            let importInject = 
                ts.createVariableStatement(
                    sourceFile.modifiers, 
                    [ts.createVariableDeclaration(
                        // Left value
                        data.interfaceVaraible, 

                        // Type
                        undefined,

                        // Right value
                        ts.createCall(
                            ts.createIdentifier('require'),
                            undefined,

                            // Use only one paramaeter
                            [ts.createLiteral(modulePath)]
                        )
                    )]
                )

            // Inject Statement
            sourceFile = ts.updateSourceFileNode(sourceFile, ts.createNodeArray([
                importInject,
                ...sourceFile.statements
            ]))
        }

        return sourceFile
    }
})