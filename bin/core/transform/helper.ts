import * as ts from 'typescript'

var binaryCollectCount: any = null
var binaryCollection: any = []

export default class Helper{
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

    /**
     * 괄호로 정의된 연산자 문법의
     * 괄호 깊이가 어디까지인지를 확인합니다.
     * 
     * 아예  괄호가 없으면 0을 반환하며 
     * (c)+(a) 와 같이 컴파일러에서 무시되는
     * 단일 객체가 괄호로 감싸진 것은 괄호취급하지 않습니다.
     * 
     * (예: 우선순위 적용이 무의미한 괄호)
     * 
     * @param node 
     * @param collectedData 
     * @param depth 
     */
    static binaryCollectDepth(node, collectedData: any = [], depth = 0){
        if(ts.isParenthesizedExpression(node.left)
            || ts.isBinaryExpression(node.left)){
            //console.log(`PATH LEFT: ${node.left.getText()}`)
            collectedData.push(node.left)
            ++depth
        }
        if(ts.isParenthesizedExpression(node.right)
            || ts.isBinaryExpression(node.right)){
            //console.log(`PATH RIGHT: ${node.right.getText()}`)
            collectedData.push(node.right)
            ++depth
        }

        if(collectedData.length != 0){
            for(;;){
                if(collectedData.length == 0) break
                let collectedItem = collectedData.shift()

                if(ts.isParenthesizedExpression(collectedItem)){
                    if(ts.isBinaryExpression(collectedItem.expression))
                        collectedItem = collectedItem.expression
                    //console.log(`PACK:`, collectedItem.getText())
                    //++depth
                }

                if(ts.isBinaryExpression(collectedItem)){
                    // ITS  NOT INVOLVED TO  KNOW  DEPTH
                    // console.log(`(check lefts: ${collectedItem.left.getText()})`, ts.isBinaryExpression(collectedItem.left))
                    // console.log(`(check right: ${collectedItem.right.getText()})`, ts.isBinaryExpression(collectedItem.right))

                    if(ts.isParenthesizedExpression(collectedItem.left)
                        || ts.isBinaryExpression(collectedItem.left)){

                        let ignoreDepthExtend = false
                        if(ts.isParenthesizedExpression(collectedItem.left)){
                            if(collectedItem.left.expression.getChildCount() == 0)
                                ignoreDepthExtend = true
                        }
                        //console.log(`PARENT.left: ${collectedItem.left.getText()}`, ts.isParenthesizedExpression(collectedItem.left), ts.isBinaryExpression(collectedItem.left))

                        if(!ignoreDepthExtend){
                            collectedData.push(collectedItem.left)
                            ++depth
                        }
                    }
                    if(ts.isParenthesizedExpression(collectedItem.right)
                        || ts.isBinaryExpression(collectedItem.right)){

                        let ignoreDepthExtend = false
                        if(ts.isParenthesizedExpression(collectedItem.right)){
                            if(collectedItem.right.expression.getChildCount() == 0)
                                ignoreDepthExtend = true
                        }
                        //console.log(`PARENT.right: ${collectedItem.right.getText()}`)

                        if(!ignoreDepthExtend){
                            collectedData.push(collectedItem.right)
                            ++depth
                        }
                    }
                }
            }
        }

        return depth
    }

    /**
     * 괄호로 우선순위가 정의된 연산자 문법을
     * 우선순위 순으로 쪼개서 반환합니다.
     * 
     * @param node 
     * @param callback 
     */
    static binaryExpressionCollect(node : ts.BinaryExpression, callback : Function){
        if(binaryCollectCount === null){
            let depth = this.binaryCollectDepth(node)
            //console.log(`DEPTH: ${depth}`)
            binaryCollectCount = depth+1 //  +1 is it full syntax
        }
        if(binaryCollectCount-- == 0){
            callback(binaryCollection.reverse())
            binaryCollection = []
            binaryCollectCount = null
        }else{
            binaryCollection.push(node)
        }
    }

    /**
     * 연산자 문법에서 쓰인 각 객체를 
     * 우선순위가 높으면서 왼쪽에 위치한 값 순으로
     * 배열화해서 반환하여 줍니다.
     * 
     * @param node 
     * @param callback 
     */
    static binaryExpressionDisassemble(node : ts.BinaryExpression, callback : Function){
        Helper.binaryExpressionCollect(node, (collection)=>{
            let assembles: any = []
            for(let collectedItem of collection){
                if(ts.isBinaryExpression(collectedItem)){
                    if(!ts.isParenthesizedExpression(collectedItem.left)){
                        if(!ts.isBinaryExpression(collectedItem.left))
                            assembles.push(collectedItem.left)
                    }else{
                        if(collectedItem.left.expression.getChildCount() == 0)
                            if(!ts.isBinaryExpression(collectedItem.left))
                                assembles.push(collectedItem.left.expression)
                    }
                    if(!ts.isParenthesizedExpression(collectedItem.right)){
                        if(!ts.isBinaryExpression(collectedItem.right))
                            assembles.push(collectedItem.right)
                    }else{
                        if(collectedItem.right.expression.getChildCount() == 0)
                            if(!ts.isBinaryExpression(collectedItem.right))
                                assembles.push(collectedItem.right.expression)
                    }
                }
            }

            callback(assembles, collection)
        })
    }

    /*
    var d = ((a + a) + b + b)+ c + c
    isVariableDeclarationList

    var d = ((a + a) + b + b)+ c + c
    isVariableStatement

    ((a + a) + b + b)+ c + c
    isBinaryExpression

    input start: ((a + a) + b + b)+ c + c
    input start: ((a + a) + b + b)+ c
    input start: (a + a) + b + b
    input start: (a + a) + b
    input start: a + a

    */
}