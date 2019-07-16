// transformer1-module
import * as ts from 'typescript'

/**
 * @description
 * Code Template for override typescript grammar
 */
export const Hook = ({
    initialize,
    context,
    file
}: {
    initialize?: (param: {
        program: ts.Program,
        pluginOptions
        ctx: ts.TransformationContext
        sourceFile: ts.SourceFile
    }) => void

    context?: (param: {
        program: ts.Program
        pluginOptions
        ctx: ts.TransformationContext
        sourceFile: ts.SourceFile
        node: ts.Node
    }) => void | ts.Node

    file?: ((param: {
        program: ts.Program
        pluginOptions
        ctx: ts.TransformationContext
        sourceFile: ts.SourceFile
    }) => void | ts.SourceFile)
}) => {

    // Actual Module Code
    return function(program: ts.Program, pluginOptions: {}) {

        return (ctx: ts.TransformationContext) => {
            return (originSourceFile: ts.SourceFile) => {
                let sourceFile = originSourceFile

                // Initialize Sequqence
                if(initialize){
                    initialize({
                        program,
                        pluginOptions,
                        ctx,
                        sourceFile
                    })
                }

                // Context Override
                function contextOverride(node: ts.Node): ts.Node {
    
                    // Context Override Sequence
                    if(context){
                        let overrideRequest = 
                            context({
                                program,
                                pluginOptions,
                                ctx,
                                sourceFile,
                                node
                            })

                        // If a value of
                        // type ts.Node is returned,
                        // override with that context.
                        if(overrideRequest) return overrideRequest
                    }

                    return ts.visitEachChild(node, contextOverride, ctx)
                }
    
                // SourceFile Override
                sourceFile = ts.visitEachChild(sourceFile, contextOverride, ctx)

                // File Override Sequence
                if(file){
                    let overrideRequest = 
                        file({
                            program,
                            pluginOptions,
                            ctx,
                            sourceFile
                        })

                    // If a value of
                    // type ts.SourceFile is returned,
                    // override with that file.
                    if(overrideRequest) return overrideRequest
                }

                return sourceFile
            }
        }
    }
}