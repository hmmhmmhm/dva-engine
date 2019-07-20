export interface IParsedComment {
    id: number
    indent: string
    contexts: string[]
}

export interface IRenderedComment {
    id: number
    indent: string
    context: string
}

export interface IResultItem {
    contexts: string[],
    usedFiles: {
        path: string,
        indent: number
    }[]
}

export interface ICommonData {
    currentFilePath: string
    idMap: {[key: string]: any}
    resultMap: {[key: string]: IResultItem}
}

export const collectComment = (
    comment: string,
    id: number = 0,
    common: ICommonData
) => {
    let comments = comment.split(`/**`)

    // First item is always useless.
    comments.shift()

    let parsedComments: IParsedComment[] = []
    for(let singleComment of comments){

        // No Empty Comment
        if(singleComment.length == 0) continue
        singleComment = `${singleComment}`

        // Loop Every line
        let indent = ``
        let contexts: string[] = []
        for(let commentLine of singleComment.split('\n')){
            let preIndent = ``
            if(commentLine.length == 0) continue
            if(commentLine.indexOf(`*/`) != -1) continue

            let actualCommentLine = commentLine.split('* ')
            if(actualCommentLine.length < 2) continue

            // Create Indent String
            for(let i=0;i<(actualCommentLine[0].length - 1);i++) preIndent += ` `
            indent = preIndent

            contexts.push(actualCommentLine[1])
        }

        let idMapKey = renderComment(contexts)
        if(typeof common.idMap[idMapKey] != 'undefined'){
            parsedComments.push({
                id: common.idMap[idMapKey],
                indent,
                contexts
            })
           common.resultMap[common.idMap[idMapKey]].usedFiles.push({
                path: common.currentFilePath,
                indent: indent.length
           })
        }else{
            parsedComments.push({
                id: id++,
                indent,
                contexts
            })
        }
    }
    return {id, parsedComments}
}

export const renderComment = (contexts: string[], indent: string= ``)=>{
    let renderedComment = `${indent}/**`

    // Loop Contexts
    for(let context of contexts)
        renderedComment += `\n${indent} * ${context}`

    // Finish Render Comment
    renderedComment += `\n${indent} */`
    return renderedComment
}

export const renderComments = (
    comment: string,
    id: number = 0,
    common: ICommonData
) => {

    let collectedComments = collectComment(comment, id, common)
    let comments: IParsedComment[] =
        collectedComments.parsedComments

    let renderedComments: IRenderedComment[] = []
    for(let comment of comments){

        // Create Indent String
        let indent = comment.indent

        // Render Comment
        let renderedComment = renderComment(comment.contexts, indent)

        renderedComments.push({
            id: comment.id,
            indent,
            context: renderedComment
        })

        // Register Common Data
        let idMapKey = renderComment(comment.contexts)
        common.idMap[idMapKey] = comment.id

        if(typeof common.resultMap[comment.id] == 'undefined'){
            common.resultMap[comment.id] = {
                contexts: comment.contexts,
                usedFiles: [
                    {
                        path: common.currentFilePath,
                        indent: indent.length
                    }
                ]
            }
        }
    }

    return {
         id: collectedComments.id,
         renderedComments,
         collectedComments
    }
}

export const rearrangeCommentTemplate = (
    id: number = 0,
    indent: string = ``
) => {
    let rearrangeComment = ``
    rearrangeComment += `${indent}/**\n`
    rearrangeComment += `${indent} * {${id}}\n`
    rearrangeComment += `${indent} */`
    return rearrangeComment
}

export const rearrangeComments = (
    sourceCode: string,
    id: number = 0,
    common: ICommonData
)=>{
    let data = renderComments(sourceCode, id, common)

    /*
    console.log(data.id)
    console.log(data.renderedComments)
    console.log(data.collectedComments.parsedComments)
    */
    
    let rearrangedCode = sourceCode
    for(let renderedComment of data.renderedComments){
        let indent = renderedComment.indent
        let rearrangeComment = rearrangeCommentTemplate(renderedComment.id, indent)

        rearrangedCode = rearrangedCode.replace(renderedComment.context, rearrangeComment)
    }
    return {id: data.id, rearrangedCode}
}