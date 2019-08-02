import * as ts from 'typescript'
import * as path from 'path'
import { Hook } from './hook'
import Helper from './helper'

const data: {
    srcPath: string
    interfaceVaraible?: ts.Identifier
    interfaceVaraibleIsHoisted: boolean
    isWorkshopScript: boolean
} = {
    srcPath: path.resolve(`${process.cwd()}`),
    interfaceVaraibleIsHoisted: false,
    isWorkshopScript: false
}

export default Hook({
    initialize: ({
        program,
        sourceFile,
        ctx
    }) => {

        // Create unique variable name in source file
        data.interfaceVaraible = ts.createUniqueName('interface')
        data.isWorkshopScript = false

        // Overload only src folder codes
        let filePath = path.resolve(sourceFile.fileName)
        let isPathMatch = false
        for(let pathSuffix of ['/src', '/test']){
            let fixedPath = path.resolve(`${process.cwd()}${pathSuffix}`)
            if(filePath.indexOf(fixedPath) != -1){
                isPathMatch = true
                data.srcPath = fixedPath
                break
            }
        }

        // If Src Folder Doesn't Match
        if(!isPathMatch) return
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
        let isPathMatch = false
        let filePath = path.resolve(sourceFile.fileName)
        if(filePath.indexOf(data.srcPath) != -1)
            isPathMatch = true

        // If Src Folder Doesn't Match
        if(!isPathMatch) return

        /**
         * @description
         * Override the grammar only when it is a specific file name.
         * 
         * ※ File name rules to which
         *    grammatical overrides apply.
         * - `script.ts`
         * - `script_*.ts`
         * - `@*.ts`
         */
        {
            let checkFileName = path.basename(filePath).toLowerCase()
            let checkFileExt = checkFileName.split('.')[1]
            if(checkFileName != 'script.ts'
                && !(checkFileName.indexOf(`script_`) == 0 && checkFileExt =='ts')
                && !(checkFileName.indexOf(`@`) == 0 && checkFileExt =='ts')) return
        }

        data.isWorkshopScript = true

        /**
         * @description
         * Typescript Operator-Overload
         * 
         * 1. `Compare` Function Context Override
         * 2. `And` Function Context Override
         */
        let overrideOps = [
            Helper.compareOverload,
            Helper.arithmeticOverload()
        ]
        for(let overrideOp of overrideOps){
            let overrideContext =
                Helper.operatorOverload(
                    node,
                    program,
                    data,

                    // Only Process Binary Expression Overload
                    Helper.binaryExpressionOverload,

                    // Overrided Context Generator
                    overrideOp
                )
            if(overrideContext) return overrideContext
        }

        /**
         * @description
         * Typescript Operator-Overload
         * 
         * - `Not` Function Context Override
         */
        if(ts.isPrefixUnaryExpression(node)){
            if(node.operator == ts.SyntaxKind.ExclamationToken){

                let property = 
                // interface_1.Value.compare
                ts.createPropertyAccess(
    
                    // interface_1.Value
                    ts.createPropertyAccess(
                        data.interfaceVaraible,
                        ts.createIdentifier('Value')
                    ),
                    ts.createIdentifier('not')
                )

                // interface_1.Value.and()
                return ts.createCall(
    
                    // FunctionName
                    property,
    
                    // Type
                    undefined,
    
                    // Paramaeter
                    [
                        node.operand
                    ]
                )
            }
        }

        /*
        if(node.getText() == '!Value.attacker()'){
            console.log(Helper.statementTypeAnalyze(node))
        }
        */

        /**
         * @TODO
         * If Statement Remover
         * 1. {} 로 다문장일때
         * 2. {} 없이 단문장 일때
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

        // Export Assignment
        let exportDecl = 
            ts.createExportAssignment(
                sourceFile.decorators,
                sourceFile.modifiers,
                false,
                ts.createIdentifier(`Rule`)
            )

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
            modulePath = `${modulePath}bin/release/eng`

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
                ...sourceFile.statements,
                exportDecl
            ]))
        } else if(data.isWorkshopScript){

            // Inject Statement
            sourceFile = ts.updateSourceFileNode(sourceFile, ts.createNodeArray([
                ...sourceFile.statements,
                exportDecl
            ]))
        }

        return sourceFile
    }
})