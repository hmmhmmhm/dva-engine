import * as ts from 'typescript'

const IS_DEBUG_PRINT = false

export default class Helper{
    static operatorOverload(
        node: ts.Node,
        program,
        data,
        overloader,
        callback: (
            node: ts.BinaryExpression,
            interfaceVaraible: ts.Expression,
            forceApplyTop?: boolean
        ) => ts.Expression | undefined

    ){

        /**
         * @description
         * Operator Overload
         * - Compare Function (Binary Expression)
         *   - Rule Condition
         *   - Value Condition
         */
        let overrideContext =
        overloader(
                node,
                data.interfaceVaraible,
                callback
            )

        if(overrideContext){
            // Check interface is used
            data.interfaceVaraibleIsHoisted = true
            return overrideContext
        }

        /**
         * @description
         * Operator Overload
         * - Compare Function (UnaryExpression)
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

                            let overrideContext = 
                                overloader(
                                    symbol.valueDeclaration.initializer,
                                    data.interfaceVaraible,
                                    callback,
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

        return
    }

    static binaryExpressionOverload(
        node: ts.Node,
        interfaceVaraible: ts.Expression,
        callback: (
            node: ts.BinaryExpression,
            interfaceVaraible: ts.Expression,
            forceApplyTop?: boolean
        ) => ts.Expression | void,
        forceApplyTop?: boolean,

    ): ts.Expression | undefined {

        // Parse Nested Parenthesize
        if(ts.isParenthesizedExpression(node)){
            if(forceApplyTop === undefined)
                forceApplyTop = Helper.checkNodeIsTopCondition(node)

            return Helper.binaryExpressionOverload(
                node.expression,
                interfaceVaraible,
                callback,
                forceApplyTop
            )
        }

        if(ts.isBinaryExpression(node)){

            // Parse Nested Left Expression
            if(ts.isParenthesizedExpression(node.left)
                || ts.isBinaryExpression(node.left)){

                let overridedExpression =
                    Helper.binaryExpressionOverload(
                        node.left,
                        interfaceVaraible,
                        callback
                    )

                if(overridedExpression)
                    node.left = overridedExpression
            }

            // Parse Nested Right Expression
            if(ts.isParenthesizedExpression(node.right)
                || ts.isBinaryExpression(node.right)){

                let overridedExpression =
                    Helper.binaryExpressionOverload(
                        node.right,
                        interfaceVaraible,
                        callback
                    )

                if(overridedExpression)
                    node.right = overridedExpression
            }

            let overrideContext =
                callback(
                    node,
                    interfaceVaraible,
                    forceApplyTop
                )

            if(overrideContext)
                return overrideContext
        }
        return
    }

    /**
    * @description
    * Check node is top condition
    * of overwatch workshop condition
    * 
    * @example
    * 
    * new Rule({
    *  condition: []
    * })
    */
    static checkNodeIsTopCondition(node: ts.Node): boolean {

       // Check [...]
        if(ts.isArrayLiteralExpression(node.parent)){
            // Check :
            if(ts.isPropertyAssignment(node.parent.parent)){
                // Check condition:
                if(node.parent.parent.name.getText() == 'condition'){
                    // Check {...}
                    if(ts.isObjectLiteralExpression(node.parent.parent.parent)){
                        // Check new
                        if(ts.isNewExpression(node.parent.parent.parent.parent)){
                            // Check Rule
                            if(node.parent.parent.parent.parent.expression.getText() == 'Rule')
                                return true
                        }
                    }
                }
            }
        }
        return false
    }

    static compareOverload(
        node: ts.BinaryExpression,
        interfaceVaraible: ts.Expression,
        forceApplyTop?: boolean
    ){
        let token = node.operatorToken.getText()

        // No Deep Type Check
        if(token == '===') token = '=='
        if(token == '!==') token = '!='

        switch(token){
            case '==':
            case '!=':
            case '>=':
            case '<=':
            case '>':
            case '<':

                let compareProperty

                /**
                 * Check Node Is Top of Rule.
                 * 
                 * Each method of application is
                 * different when used in values
                 * and when used in rules.
                 */
                if(Helper.checkNodeIsTopCondition(node) || (forceApplyTop === true)){

                    // Rule Condition
                    compareProperty = 

                        // interface_1.Value.compare
                        ts.createPropertyAccess(

                            // interface_1.Value
                            ts.createPropertyAccess(
                                interfaceVaraible,
                                // Yep Hard coding
                                ts.createIdentifier('Classes.Compiler')
                            ),
                            ts.createIdentifier('ruleCompare')
                        )

                }else{
                    // Value Condition
                    compareProperty = 
                        // interface_1.Value.compare
                        ts.createPropertyAccess(

                            // interface_1.Value
                            ts.createPropertyAccess(
                                interfaceVaraible,
                                ts.createIdentifier('Value')
                            ),
                            ts.createIdentifier('compare')
                        )
                }

                // interface_1.Value.compare()
                return ts.createCall(

                    // FunctionName
                    compareProperty,

                    // Type
                    undefined,

                    // Paramaeter
                    [
                        node.left,
                        ts.createIdentifier(`'${token}'`),
                        node.right,
                    ]
                )
        }

        return
    }

    static arithmeticOverload(){
        return (
            node: ts.BinaryExpression,
            interfaceVaraible: ts.Expression,
            forceApplyTop?: boolean
        ) => {

            // Check Token List
            let tokenMap = {
                and: '&&',
                or: '||',

                add: '+',
                subtract: '-',
                divide: '/',
                multiply: '*',

                modulo: '%',
                raiseToPower: '**'
            }

            for(let type of Object.keys(tokenMap)){
                let needToMatchToken = tokenMap[type]

                if(needToMatchToken &&
                    (node.operatorToken.getText() == needToMatchToken)
                ){
                    // Value Condition
                    let property = 
                        // interface_1.Value.compare
                        ts.createPropertyAccess(

                            // interface_1.Value
                            ts.createPropertyAccess(
                                interfaceVaraible,
                                ts.createIdentifier('Value')
                            ),
                            ts.createIdentifier(type)
                        )

                    // interface_1.Value.and()
                    return ts.createCall(
        
                        // FunctionName
                        property,
        
                        // Type
                        undefined,
        
                        // Paramaeter
                        [
                            node.left,
                            node.right,
                        ]
                    )
                }
            }
    
            return
        }
    }

    static statementTypeAnalyze(node){
        let opt: any = []
        let typeList = [
            "isArray","isString","isNumber","isUnicodeIdentifierStart",
            "isWhiteSpaceLike","isWhiteSpaceSingleLine","isLineBreak",
            "isOctalDigit","isIdentifierStart","isIdentifierPart","isIdentifierText",
            "isExternalModuleNameRelative","isStatementWithLocals","isFileLevelUniqueName",
            "isRecognizedTripleSlashComment","isPinnedComment","isBlockOrCatchScoped",
            "isCatchClauseVariableDeclarationOrBindingElement","isAmbientModule",
            "isModuleWithStringLiteralName","isNonGlobalAmbientModule",
            "isEffectiveModuleDeclaration","isShorthandAmbientModuleSymbol",
            "isBlockScopedContainerTopLevel","isGlobalScopeAugmentation",
            "isExternalModuleAugmentation","isModuleAugmentationExternal",
            "isEffectiveExternalModule","isBlockScope","isDeclarationWithTypeParameters",
            "isDeclarationWithTypeParameterChildren","isAnyImportSyntax",
            "isLateVisibilityPaintedStatement","isAnyImportOrReExport",
            "isExternalOrCommonJsModule","isJsonSourceFile","isEnumConst",
            "isDeclarationReadonly","isVarConst","isLet","isSuperCall",
            "isImportCall","isLiteralImportTypeNode","isPrologueDirective",
            "isPartOfTypeNode","isChildOfNodeWithKind","isVariableLike",
            "isVariableLikeOrAccessor","isVariableDeclarationInVariableStatement",
            "isValidESSymbolDeclaration","isFunctionBlock","isObjectLiteralMethod",
            "isObjectLiteralOrClassExpressionMethod","isIdentifierTypePredicate",
            "isThisTypePredicate","isSuperProperty","isThisProperty","isJSXTagName",
            "isExpressionNode","isInExpressionContext",
            "isExternalModuleImportEqualsDeclaration",
            "isInternalModuleImportEqualsDeclaration",
            "isSourceFileJS","isSourceFileNotJS","isInJSFile","isInJsonFile",
            "isInJSDoc","isJSDocIndexSignature","isRequireCall",
            "isSingleOrDoubleQuote","isStringDoubleQuoted","isAssignmentDeclaration",
            "isDefaultedExpandoInitializer","isExportsIdentifier",
            "isModuleExportsPropertyAccessExpression","isBindableObjectDefinePropertyCall",
            "isPrototypePropertyAssignment","isSpecialPropertyDeclaration",
            "isFunctionSymbol","isDefaultImport","isJSDocConstructSignature",
            "isJSDocTypeAlias","isTypeAlias","isRestParameter","isAssignmentTarget",
            "isNodeWithPossibleHoistedDeclaration","isValueSignatureDeclaration",
            "isDeleteTarget","isNodeDescendantOf","isDeclarationName",
            "isLiteralComputedPropertyDeclarationName","isIdentifierName",
            "isAliasSymbolDeclaration","isKeyword","isContextualKeyword",
            "isNonContextualKeyword","isStringANonContextualKeyword",
            "isIdentifierANonContextualKeyword","isTrivia","isAsyncFunction",
            "isStringOrNumericLiteralLike","isDynamicName","isWellKnownSymbolSyntactically",
            "isPropertyNameLiteral","isKnownSymbol","isESSymbolIdentifier",
            "isPushOrUnshiftIdentifier","isParameterDeclaration",
            "isIntrinsicJsxName","isThisIdentifier","isLogicalOperator",
            "isAssignmentOperator","isAssignmentExpression",
            "isDestructuringAssignment","isExpressionWithTypeArgumentsInClassExtendsClause",
            "isEntityNameExpression","isPropertyAccessEntityNameExpression",
            "isPrototypeAccess","isRightSideOfQualifiedNameOrPropertyAccess",
            "isEmptyObjectLiteral","isEmptyArrayLiteral","isCollapsedRange",
            "isDeclarationNameOfEnumOrNamespace","isWatchSet","isWriteOnlyAccess",
            "isWriteAccess","isAbstractConstructorType","isAbstractConstructorSymbol",
            "isUMDExportSymbol","isObjectTypeDeclaration","isTypeNodeKind",
            "isParameterPropertyDeclaration","isEmptyBindingPattern",
            "isEmptyBindingElement","isParseTreeNode","isNamedDeclaration",
            "isNumericLiteral","isBigIntLiteral","isStringLiteral","isJsxText",
            "isRegularExpressionLiteral","isNoSubstitutionTemplateLiteral",
            "isTemplateHead","isTemplateMiddle","isTemplateTail","isIdentifier",
            "isQualifiedName","isComputedPropertyName","isTypeParameterDeclaration",
            "isParameter","isDecorator","isPropertySignature","isPropertyDeclaration",
            "isMethodSignature","isMethodDeclaration","isConstructorDeclaration",
            "isGetAccessorDeclaration","isSetAccessorDeclaration",
            "isCallSignatureDeclaration","isConstructSignatureDeclaration",
            "isIndexSignatureDeclaration","isGetOrSetAccessorDeclaration",
            "isTypePredicateNode","isTypeReferenceNode","isFunctionTypeNode",
            "isConstructorTypeNode","isTypeQueryNode","isTypeLiteralNode",
            "isArrayTypeNode","isTupleTypeNode","isUnionTypeNode",
            "isIntersectionTypeNode","isConditionalTypeNode","isInferTypeNode",
            "isParenthesizedTypeNode","isThisTypeNode","isTypeOperatorNode",
            "isIndexedAccessTypeNode","isMappedTypeNode","isLiteralTypeNode",
            "isImportTypeNode","isObjectBindingPattern","isArrayBindingPattern",
            "isBindingElement","isArrayLiteralExpression",
            "isObjectLiteralExpression","isPropertyAccessExpression",
            "isElementAccessExpression","isCallExpression","isNewExpression",
            "isTaggedTemplateExpression","isTypeAssertion","isParenthesizedExpression",
            "isFunctionExpression","isArrowFunction","isDeleteExpression",
            "isTypeOfExpression","isVoidExpression","isAwaitExpression",
            "isPrefixUnaryExpression","isPostfixUnaryExpression",
            "isBinaryExpression","isConditionalExpression","isTemplateExpression",
            "isYieldExpression","isSpreadElement","isClassExpression",
            "isOmittedExpression","isExpressionWithTypeArguments","isAsExpression",
            "isNonNullExpression","isMetaProperty","isTemplateSpan",
            "isSemicolonClassElement","isBlock","isVariableStatement",
            "isEmptyStatement","isExpressionStatement","isIfStatement",
            "isDoStatement","isWhileStatement","isForStatement","isForInStatement",
            "isForOfStatement","isContinueStatement","isBreakStatement",
            "isBreakOrContinueStatement","isReturnStatement","isWithStatement",
            "isSwitchStatement","isLabeledStatement","isThrowStatement",
            "isTryStatement","isDebuggerStatement","isVariableDeclaration",
            "isVariableDeclarationList","isFunctionDeclaration","isClassDeclaration",
            "isInterfaceDeclaration","isTypeAliasDeclaration","isEnumDeclaration",
            "isModuleDeclaration","isModuleBlock","isCaseBlock","isNamespaceExportDeclaration",
            "isImportEqualsDeclaration","isImportDeclaration","isImportClause",
            "isNamespaceImport","isNamedImports","isImportSpecifier","isExportAssignment",
            "isExportDeclaration","isNamedExports","isExportSpecifier","isMissingDeclaration",
            "isExternalModuleReference","isJsxElement","isJsxSelfClosingElement",
            "isJsxOpeningElement","isJsxClosingElement","isJsxFragment","isJsxOpeningFragment",
            "isJsxClosingFragment","isJsxAttribute","isJsxAttributes","isJsxSpreadAttribute",
            "isJsxExpression","isCaseClause","isDefaultClause","isHeritageClause",
            "isCatchClause","isPropertyAssignment","isShorthandPropertyAssignment",
            "isSpreadAssignment","isEnumMember","isSourceFile","isBundle",
            "isUnparsedSource","isJSDocTypeExpression","isJSDocAllType",
            "isJSDocUnknownType","isJSDocNullableType","isJSDocNonNullableType",
            "isJSDocOptionalType","isJSDocFunctionType","isJSDocVariadicType",
            "isJSDoc","isJSDocAugmentsTag","isJSDocClassTag","isJSDocEnumTag",
            "isJSDocThisTag","isJSDocParameterTag","isJSDocReturnTag","isJSDocTypeTag",
            "isJSDocTemplateTag","isJSDocTypedefTag","isJSDocPropertyTag",
            "isJSDocPropertyLikeTag","isJSDocTypeLiteral","isJSDocCallbackTag",
            "isJSDocSignature","isSyntaxList","isNode","isNodeKind","isToken",
            "isNodeArray","isLiteralKind","isLiteralExpression","isTemplateLiteralKind",
            "isTemplateLiteralToken","isTemplateMiddleOrTemplateTail",
            "isImportOrExportSpecifier","isStringTextContainingNode",
            "isGeneratedIdentifier","isModifierKind","isParameterPropertyModifier",
            "isClassMemberModifier","isModifier","isEntityName","isPropertyName",
            "isBindingName","isFunctionLike","isFunctionLikeDeclaration",
            "isFunctionLikeKind","isFunctionOrModuleBlock","isClassElement",
            "isClassLike","isAccessor","isMethodOrAccessor","isTypeElement",
            "isClassOrTypeElement","isObjectLiteralElementLike","isTypeNode",
            "isFunctionOrConstructorTypeNode","isBindingPattern","isAssignmentPattern",
            "isArrayBindingElement","isDeclarationBindingElement",
            "isBindingOrAssignmentPattern","isObjectBindingOrAssignmentPattern",
            "isArrayBindingOrAssignmentPattern",
            "isPropertyAccessOrQualifiedNameOrImportTypeNode",
            "isPropertyAccessOrQualifiedName","isCallLikeExpression",
            "isCallOrNewExpression","isTemplateLiteral","isLeftHandSideExpression",
            "isUnaryExpression","isUnaryExpressionWithWrite","isExpression",
            "isAssertionExpression","isPartiallyEmittedExpression",
            "isNotEmittedStatement","isNotEmittedOrPartiallyEmittedNode",
            "isIterationStatement","isForInOrOfStatement","isConciseBody","isFunctionBody",
            "isForInitializer","isModuleBody","isNamespaceBody","isJSDocNamespaceBody",
            "isNamedImportBindings","isModuleOrEnumDeclaration","isDeclaration",
            "isDeclarationStatement","isStatementButNotDeclaration","isStatement",
            "isModuleReference","isJsxTagNameExpression","isJsxChild","isJsxAttributeLike",
            "isStringLiteralOrJsxExpression","isJsxOpeningLikeElement",
            "isCaseOrDefaultClause","isJSDocNode","isJSDocCommentContainingNode",
            "isJSDocTag","isSetAccessor","isGetAccessor","isObjectLiteralElement",
            "isTypeReferenceType","isStringLiteralLike","isNamedImportsOrExports",
            "isUrl","isRootedDiskPath","isDiskPathRoot","isImplicitGlob",
            "isSupportedSourceFileName","isAnySupportedFileExtension","isCheckJsEnabledForFile",
            "isJsonEqual","isJSDocLikeText","isExternalModule","isDeclarationFileName",
            "isTraceEnabled","isExportsOrModuleExportsOrAlias","isInstantiatedModule",
            "isInternalName","isLocalName","isExportName","isCommaSequence",
            "isOuterExpression","isRawSourceMap","isSourceMapping","isSimpleCopiableExpression",
            "isEmittedFileOfProgram","isProgramUptoDate","isPathInNodeModulesStartingWithDot",
            "isJsPrivate","isInRightSideOfInternalImportEqualsDeclaration",
            "isCallExpressionTarget","isNewExpressionTarget","isCallOrNewExpressionTarget",
            "isJumpStatementTarget","isLabelOfLabeledStatement","isLabelName","isTagName",
            "isRightSideOfQualifiedName","isRightSideOfPropertyAccess",
            "isNameOfModuleDeclaration","isNameOfFunctionDeclaration",
            "isLiteralNameOfPropertyDeclarationOrIndexAccess",
            "isExpressionOfExternalModuleImportEqualsDeclaration","isThis","isInString",
            "isInsideJsxElementOrAttribute","isInTemplateString","isInJSXText",
            "isPossiblyTypeArgumentPosition","isInComment","isComment",
            "isStringOrRegularExpressionOrTemplateLiteral","isPunctuation",
            "isInsideTemplateLiteral","isAccessibilityModifier",
            "isArrayLiteralOrObjectLiteralDestructuringPattern",
            "isInReferenceComment","isInNonReferenceComment","isTypeKeyword",
            "isExternalModuleSymbol","isObjectBindingElementWithoutPropertyName",
            "isMemberSymbolInBaseType","isFirstDeclarationOfSymbolParameter",
            "isImportOrExportSpecifierName","isEqualityOperatorKind",
            "isStringLiteralOrTemplate",
            "isReturnStatementWithFixablePromiseHandler","isFixablePromiseHandler"
        ]

        for(let typeItem of typeList){
            try{
                if(ts[typeItem](node))
                    opt.push(typeItem)
            }catch(e){}
        }
        return opt
    }
}