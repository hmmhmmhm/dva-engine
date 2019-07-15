// transformer1-module
import * as ts from 'typescript'
import Helper from './helper'

const option = {
    moduleName: 'infinite.ts',
    variableName: 'inf'
}

export default function(program: ts.Program, pluginOptions: {}) {
    let checker = program.getTypeChecker()

    return (ctx: ts.TransformationContext) => {
        return (sourceFile: ts.SourceFile) => {

            // Create unique variable name by source file
            let variableName = ts.createUniqueName(option.variableName)
            ctx.hoistVariableDeclaration(variableName)

            function binaryCollect(node, tree=[]){
                if(ts.isParenthesizedExpression(node.left)){
                    //
                }else{

                }
            }
            /**
             * @description
             * 연산자 재정의 프로그래밍
             * 
             * 아마 각 호출 및 정의 시마다
             * 다르게 연산자 구문을 찾아와야 하는 것으로 보임
             * 
             * 1. 함수 호출시 인자형태로 존재함
             * 1. 변수 생성시 초기화 값으로 존재함
             * 2. 연산자 사용시 중첩된 연산자 값으로 존재함
             */
            function operatorFind(node, tree = [], callback){
                if(ts.isCallExpression(node)){
                    //call expression detected console.log?
                    console.log('call expression detected', node.expression.getText())
                    for(let argument of node.arguments){
                        operatorFind(argument, tree, callback)
                    }
                } else if(ts.isVariableDeclaration(node)){
                    // 여기서 대입될 변수의 정보를 얻을 수 있음
                    console.log('var declar detected', node.getText())
                    operatorFind(node.initializer, tree, callback)
                } else if(ts.isParenthesizedExpression(node)){
                    //console.log('hey!', node.getText())
                    console.log('parenthesized expression detected', node.expression.getText())
                    operatorFind(node.expression, tree, callback)
                } else if(ts.isBinaryExpression(node)){

                    /**
                     * @todo
                     * 중간에 Infinite 객체가 단한개라도 있다면
                     * 모든 연산자 처리과정을 Infinite로 후킹?
                     * 
                     * ++?
                     */
                    if(!ts.isBinaryExpression(node.left)
                        && !ts.isBinaryExpression(node.right)){

                        // SyntaxKind.OpenBracketToken
                        // SyntaxKind.CloseBracketToken
                        if(!ts.isParenthesizedExpression(node.left)
                            && !ts.isParenthesizedExpression(node.right)){

                            console.log('  no parenthesized', node.getText())
                            operatorOverride(node)
                        }else{
                            // (a+b) + a
                            if(ts.isParenthesizedExpression(node.left)){
                                console.log('  left found', node.left.getText())
                                operatorFind(node.left.expression, tree, callback)
                            }else{
                                console.log('  left found', node.left.getText())
                                operatorFind(node.left, tree, callback)
                            }
                            if(ts.isParenthesizedExpression(node.right)){
                                console.log('  right found', node.right.getText())
                                operatorFind(node.right.expression, tree, callback)
                            }else{
                                console.log('  right found', node.right.getText())
                                operatorFind(node.right, tree, callback)
                            }

                            // a + a.call()
                            // a + b()
                        }
                    }else{
                        console.log(' binary founded', `L:[ ${node.left.getText()} ]   R:[ ${node.right.getText()} ]`)
                        if(ts.isBinaryExpression(node.left)){
                            operatorFind(node.left.left, tree, callback)
                            operatorFind(node.left.right, tree, callback)
                        }else{
                            operatorFind(node.left, tree, callback)
                        }

                        if(ts.isBinaryExpression(node.right)){
                            operatorFind(node.right.right, tree, callback)
                            operatorFind(node.right.left, tree, callback)
                        }else{
                            operatorFind(node.right, tree, callback)
                        }
                    }
                } else{
                    //console.log(`unknown`, node.getText())
                }
            }

            function paramFind(node){
                let str : string = node.getText()
                if(str.indexOf(`((a + a) + b + b)+ c + c`) != -1){
                    console.log('\nDETECTED!')
                    console.log(node.getText())
                    console.log(Helper.statementTypeAnalyze(node))
                    console.log('')
                }
            }

            /**
             * @todo
             * 1. += 같이 삽입과정이 있을 경우 향후 처리
             * 
             * @param node 
             */
            function operatorOverride(node){

                if(ts.isBinaryExpression(node)){
                    //let type = checker.getSymbolAtLocation(node.left)
                    console.log('a full', node.getText(), `\t[ ${node.left.getText()} |${node.operatorToken.getText()}| ${node.right.getText()} ]`)
                    console.log('')
                }else{
                    console.log('b full', node.getText())
                    console.log('')
                }
            }

            // Variable Declaration Override
            let isSourceModuleImportRequire = false
            function declarationOverride(node: ts.Node): ts.Node {

                // Override only variables extended to JSDoc Comments
                if(ts.isVariableDeclaration(node)
                    || ts.isPropertyDeclaration(node)
                    || ts.isParameterPropertyDeclaration(node)){

                    let isExtendBig = false

                    // JSDoc form differs when defining
                    // parameters and general variables in class.
                    if(ts.isParameterPropertyDeclaration(node)){

                        // @param paramName Infinite
                        for(let value of ts.getJSDocParameterTags(node)){

                            if(value.comment != undefined)
                                if(value.comment.toString() == 'Infinite'
                                    && value.tagName.getText() == 'param'){
                                        isExtendBig = true
                                        break
                                    }
                        }
                    }else{

                        // @extends Infinite
                        let symbol = checker.getSymbolAtLocation(node.name)
                        if(symbol !== undefined){
                            for(let docTag of symbol.getJsDocTags()){
                                if(typeof(docTag['name']) != 'undefined'
                                    && docTag['name'] == 'extends'
                                    && typeof(docTag['text']) != 'undefined'
                                    && docTag['text'] == 'Infinite' ){

                                    isExtendBig = true
                                    break
                                }
                            }
                        }
                    }

                    // Verify that the initial value is defined.
                    
                    if(node.initializer !== undefined){
                        if(node.initializer.getText().length != 0 && isExtendBig){

                            isSourceModuleImportRequire = true

                            // The format is changed to a string only when it is numeric
                            // otherwise, the existing grammar is applied as the initial value.
                            let initValue = node.initializer
                            if(ts.isNumericLiteral(node.initializer))
                                initValue = ts.createLiteral(node.initializer.getText())

                            node.initializer = 
                                ts.createCall(variableName, undefined, [initValue])
                            return node
                        }
                    }
                }

                //console.log(`input start: ${node.getText()}`)
                //paramFind(node)

                if(ts.isBinaryExpression(node)){
                    //console.log(`input start: ${node.left.getText()} |${node.operatorToken.getText()}| ${node.right.getText()}`)

                    Helper.binaryExpressionDisassemble(node, (assembles, collection)=>{
                        console.log('COLLECTED!')
                        for(let collectedItem of collection){
                            console.log(`collectedItem: ${collectedItem.getText()}`)
                        }
                        for(let assemble of assembles){
                            console.log(`assemble: ${assemble.getText()}`)
                        }
                    })

                    //console.log(Helper.statementTypeAnalyze(node))
                    /*
                    return
                    operatorFind(node, [], (tree)=>{
                        console.log('tree')

                        
                    })
                    */
                }
                
                return ts.visitEachChild(node, declarationOverride, ctx)
            }

            // SourceFile Override
            sourceFile = ts.visitEachChild(sourceFile, declarationOverride, ctx)

            // Module Require Injection
            if(isSourceModuleImportRequire){

                // Direct Declaration Version
                // let moduleDeclaration = `var ${variableName} = require('${option.moduleName}')`
                // let importInject = ts.createExpressionStatement(ts.createIdentifier(moduleDeclaration))

                /*
                // Pure Declaration Version
                let importInject = ts.createImportDeclaration(
                    undefined,
                    undefined,
                    ts.createImportClause(variableName, undefined),
                    ts.createLiteral(option.moduleName))
                */

                // Hybrid Declaration Version
                let importInject = 
                    ts.createVariableStatement(
                        sourceFile.modifiers, 
                        [ts.createVariableDeclaration(
                            variableName, 
                            undefined, // Type
                            ts.createCall(
                                ts.createIdentifier('require'), 
                                undefined,
                                [ts.createLiteral(option.moduleName)]
                            )
                        )]
                    )

                sourceFile = ts.updateSourceFileNode(sourceFile, ts.createNodeArray([
                    importInject,
                    ...sourceFile.statements
                ]))
            }

            return sourceFile
        }
    }
}


/**
 * @description
 * 인피티트 객체 구현
 */
let forInfinite = (node, program)=>{
    let checker = program.getTypeChecker()

    // 초기 변수형 정의과정   (var a = 1234)
    if(ts.isVariableDeclaration(node)){
        console.log(node.getText())
        let symbol = checker.getSymbolAtLocation(node.name)
        console.log(symbol.getJsDocTags())
        //[ { name: 'extends', text: 'Big' } ]

        /**
         * @extends Big
         */
        let a = 12345 // yo2
    }

    // 연산자 사용 재정의  (a + b)
    if(ts.isBinaryExpression(node)){
        let type = checker.getSymbolAtLocation(node.left)
        console.log(type.getJsDocTags())
        //[ { name: 'extends', text: 'Big' } ]

        // 쓰인연산자, 왼쪽, 오른쪽 피연산자
        console.log(node.operatorToken.getText())
        console.log(node.left.getText())
        console.log(node.right.getText())
    }

    // 클래스 컨스트럭터 정의과정 후킹
    if(ts.isConstructorDeclaration(node)){
        console.log('hi')
        console.log(node.getText())
    }

    // 초기 숫자형 정의부분  (1234)
    if(ts.isLiteralExpression(node) && ts.isNumericLiteral(node)){

        // 확인된 전용문법
        console.log(node.getText())
        return ts.createLiteral(9999)

    }

    /**
     * @description
     * 미사용 코드들
     */
    //ts.createInputFiles('', '')
    //ts.isPropertyAccessExpression(node)
    //ts.isNumericLiteral(node)
    //let type = checker.getContextualType(node.left)
    //console.log(node.expression.getText())
    //console.log(node.getSourceFile().fileName)
    return null
}


/**
 * @description
 * 캡슐러블 객체 구현
 */
let forCapsulable = (node)=>{

    // 클래스 정의과정
    if(ts.isClassDeclaration(node)){
        //console.log(node.getFullText())
    }
}

/**
 * @description
 * 타입스크립트 API 모음
 */
let document = (node)=>{
    
    // Identifier로 문법에 상관없이 코드 적용가능
    // https://www.reddit.com/r/typescript/comments/8mtnop/is_there_a_way_to_set_the_sourcefile_of_a_node_in/
    ts.createIdentifier(`console.log('hello')`)

    // 코드줄 인젝션
    let injectionCode = ``
    ts.createIdentifier(`${injectionCode}\n` + node.getText())

    // 노드객체 생성방법
    ts.createLiteral('blabla') // string, number, boolean
    ts.createLiteral(1234) // string, number, boolean
    ts.createLiteral(true) // string, number, boolean
    ts.createArrayLiteral([]) // only pure array

    // 함수 호출 시
    if(ts.isCallExpression(node)){
        // 표현문에서만 아래함수로 표현 문을 그대로 가져올 수 있음
        console.log(node.expression.getText())
    }

    // 인스턴스 생성시 탐지
    if(ts.isNewExpression(node)){}

    // 함수 호출 또는 인스턴스 생성 시 탐지
    if(ts.isCallOrNewExpression(node)){}

    // import 문법 사용시 탐지
    if (ts.isImportDeclaration(node)) {
        // from 에서 지정한 파일 위치 얻기
        node.moduleSpecifier.getText()
    }

    // 함수 호출 캐치방법
    // safely 가 함수 호출 대상일 때
    // const c = safely(a.b);
    if (ts.isCallExpression(node) && node.expression.getText() === 'safely') {
        // 함수를 호출할 경우 호출하는 인자를 얻어오는 방법
        const target = node.arguments[0]
        
        // 특정 변수가 obj.a_target 과 같이
        // 객체에 접근시 이를 감지하는법
        if (ts.isPropertyAccessExpression(target)) {
            return ts.createBinary(
                target.expression,
                ts.SyntaxKind.AmpersandAmpersandToken,
                target
            )
        }
    }

    // safely(a.b) 를 a && a.b; 로
    if (ts.isCallExpression(node) && node.expression.getText() === 'safely') {
        const target = node.arguments[0]
        if (ts.isPropertyAccessExpression(target)) {

            // a && a.b;
            return ts.createBinary(
                target.expression,
                ts.SyntaxKind.AmpersandAmpersandToken,
                target
            )
        }
    }

    // 토큰형태의 사용법
    ts.SyntaxKind.CaretEqualsToken // ^=
    ts.SyntaxKind.AmpersandAmpersandToken // &&
    return null
}