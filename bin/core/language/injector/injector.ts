
export interface ICollectCommentItem {
    id: number,
    indent: string
}

export const collectCommentData = (comment: string) => {
    let comments = comment.split(`/**`)

    // First item is always useless.
    comments.shift()

    let collectedData: ICollectCommentItem[] = []
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
        let id = Number(contexts.join('').replace('{', '').replace('}', ''))

        if(!Number.isNaN(id)){
            collectedData.push({
                id,
                indent
            })
        }
    }
    return collectedData
}

export interface ITraslationItem {
    contexts: string[]
    usedFiles: {
        path: string
        indent: number
    }[]
}

export interface ITraslationData {[key: string]: ITraslationItem | any}
