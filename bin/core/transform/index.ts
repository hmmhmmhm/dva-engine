import * as ts from 'typescript'
import * as path from 'path'
import { Hook } from './hook'

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

        // Check interface is used
        let isInterfaceUsed = false
        if(ts.isBinaryExpression(node)){
            isInterfaceUsed = true
            console.log('FOUND')
            console.log(node.getText())
        }

        // Hoist interface variable
        if(isInterfaceUsed && !data.interfaceVaraibleIsHoisted)
            data.interfaceVaraibleIsHoisted = true
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