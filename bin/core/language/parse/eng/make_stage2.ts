import { writeFileSync, readFileSync } from 'fs'

// import values from './value_stage1.json'
let values = JSON.parse(String(readFileSync(`./value_stage1.json`)))

export const splitter = (context: string, splitMax = 40, splitMin = 15) => {
    let chars = context.split('')

    let splitted: string[] = []
    let splitItem: string = ``
    let splitCount = 0

    for(let char of chars){

        if(++splitCount >= splitMax && char == ' '){
            splitCount = 0
            splitted.push(splitItem)
            splitItem = ``
            continue
        }

        if(char == '\n'){
            if(splitItem.length != 0){
                splitted.push(splitItem)
                splitItem = ``
            }
            splitCount = 0
            continue
        }

        splitItem += char
    }

    if(splitItem.length != 0){
        if(splitItem.length > splitMin){
            splitted.push(splitItem)
        }else{
            splitted[splitted.length - 1] += ` ${splitItem}`
        }
        splitItem = ``
    }

    return splitted
}

let stage2: any[] = []

for(let value of values){
    value = value.replace(/(<([^>]+)>)/ig, '')
    let contexts: string[] = []
    let definitions: any[] = []

    let detectedDefStart = false

    let isDefFirstNoDash = false
    let defFirstNoDashItem: any[] = []
    let defFirstNoDashItemSub: any[] = []

    let valueLines = value.split('\n')
    for(let valueLineIndex in valueLines){
        let valueLine = valueLines[valueLineIndex]
        valueLine = valueLine.replace('&nbsp;', '')

        if(valueLine.length == 0) continue
        if(valueLine.indexOf('Video') != -1) continue
        if(valueLine.indexOf('Tutorial') != -1) continue
        if(valueLine.indexOf('.jpg') != -1) continue
        if(valueLine.indexOf('no definitions') != -1) continue
        if(valueLine.indexOf('no specific definitions') != -1) continue

        // Definitions:
        if(valueLine == 'Definitions:'){
            detectedDefStart = true
            continue
        }

        if(detectedDefStart){
            // 대시가 있을때
            if(valueLine.indexOf(' - ') != -1){

                if(isDefFirstNoDash){
                    // 다중라인을 전체 주석이 쓰여진 경우
                    defFirstNoDashItem.push(valueLine)
                    continue
                }

                // 다중라인이 특별 부분에만 쓰여진 경우 체크
                if(defFirstNoDashItemSub.length != 0){
                    definitions[definitions.length-1] = 
                        [`${definitions[definitions.length-1]} (${defFirstNoDashItemSub.join(', ')})`]
                }
                definitions.push([valueLine])
            }else{
                // 대시가 없고 최초일때
                if(definitions.length == 0 && defFirstNoDashItem.length == 0 && !isDefFirstNoDash){
                    isDefFirstNoDash = true
                    continue
                }

                if(isDefFirstNoDash){
                    // 다중라인을 전체 주석에 쓰여진 경우
                    definitions.push(defFirstNoDashItem)
                    defFirstNoDashItem = []
                }else{
                    // 다중라인이 특별 부분에만 쓰여진 경우
                    defFirstNoDashItemSub.push(valueLine)
                }

            }
            
            continue
        }
        contexts.push(valueLine)
    }

    // 마지막 라인일 경우
    if(defFirstNoDashItem.length != 0){
        definitions.push(defFirstNoDashItem)
        defFirstNoDashItem = []
    }

    let name = contexts.shift()
    contexts = splitter(contexts.join('\n'))
    for(let definitionIndex in definitions){
        if(Array.isArray(definitions[definitionIndex])){
            definitions[definitionIndex] =
                splitter(definitions[definitionIndex].join('\n'))
        }
    }
    stage2.push({name, contexts, definitions})
}

writeFileSync(`${__dirname}/value_stage2.json`, JSON.stringify(stage2, null, 2))
console.log(`Finished`)