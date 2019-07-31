import * as TJS from 'typescript-json-schema'
import * as Path from 'path'

import fs from 'fs'
import path from 'path'
import NestedFolder from 'nested-static'

/**
 * @description
 * Built-in Time Typescript Interface Parser
 */
export const parseInterfaces = async ( filePath: string) => {
    const settings: TJS.PartialArgs = {
        aliasRef: true,
        required: true
    }
    const compilerOptions: TJS.CompilerOptions = { strictNullChecks: true }

    const program = TJS.getProgramFromFiles([Path.resolve(filePath)], compilerOptions)

    const schema = TJS.generateSchema(program, '*', settings)
    if(schema == null || schema.definitions == null) throw new Error('Failed Generator Init')
    return schema.definitions
}

/**
 * @description
 * Collect Typescript Interface Files Code
 */
export const collectInterfaceFiles = async (
    folderPath: string,
    callback: (argument: {
        fileName: string
        filePath: string
        subPath: string
        staticPath: string
        fileData: string
        interfaceName: string
        typeName: string
    }[]) => Promise<void>,

    // No Collect Index File
    noIndexFile: Boolean = true
) => {

    // Search all of the child folders
    return new Promise((resolve)=>{
        NestedFolder(folderPath, async (folders)=>{
            let data: any = []
        
            for(let folder of folders){
                let files = fs.readdirSync(folder.staticPath)
    
                // Search all of the files
                for(let file of files){
                    let filePath = folder.staticPath + '/' + file
                    filePath = path.resolve(filePath)

                    let stats = fs.statSync(filePath)
                    if(stats.isDirectory()) continue
                    if(noIndexFile && file == 'index.ts') continue
    
                    let fileData = String(fs.readFileSync(filePath))
                    let interfaceName = ''
                    let typeName = ``
    
                    try{
                        interfaceName = 
                            fileData.split('export interface ')[1]
                                .split(' {')[0]
                                .split(' ').join('')
                    }catch(e){}
    
                    try{
                        typeName =
                            fileData.split('export type ')[1]
                                .split('\n')[0]
                                .split(' ').join('')
                    }catch(e){}
    
                    data.push({
                        fileName: file,
                        filePath,
                        subPath: folder.subPath,
                        staticPath: folder.staticPath,
                        fileData,
                        interfaceName,
                        typeName
                    })
                }
            }
    
            await callback(data)
            resolve()
        })
    })
}

/**
 * @description
 * The functions in the overwatch
 * workshop are named in the pascal case.
 * But the javascript are uses a camelcase,
 * so we need to convert it.
 * 
 * It'll be using in archived value function collector
 * (`sequence/collectArchivedValue.ts`)
 */
export const camelCaseToPascalCase = (
    name: string,
    doSpace = true,
    prefixRemove = false
)=>{
    if(prefixRemove && name[0] == 'I'){
        let temp = name.split('')
        temp.shift()
        name = temp.join('')
    }

    let pascalCase = ''
    for(let alphabetIndex in name.split('')){
        let alphabet = name[alphabetIndex]

        if(Number(alphabetIndex) == 0){
            pascalCase += alphabet.toUpperCase()
            continue
        }

        let isUpperCase = alphabet == alphabet.toUpperCase()
        if(isUpperCase){
            if(doSpace) pascalCase += ' '
            pascalCase += alphabet.toUpperCase()
        }else{
            pascalCase += alphabet.toLowerCase()
        }
    }
    return pascalCase
}

/**
 * @description
 * The javascript interface name uses a pascal case.
 * Conversion to camera case is required to
 * infer variable names etc. through interface name.
 * 
 * It'll be using when the collects resolver type names
 * (`sequence/collectType.ts`)
 */
export const pascalCaseToCamelCase = (
    name: string,
    doSpace = true,
    prefixRemove = false,
    prefixInstall = false
)=>{
    let camelCase = ''

    if(prefixRemove && name[0] == 'I'){
        let temp = name.split('')
        temp.shift()
        name = temp.join('')
    }

    for(let alphabetIndex in name.split('')){
        let alphabet = name[alphabetIndex]

        if(Number(alphabetIndex) == 0){
            camelCase += alphabet.toLowerCase()
            continue
        }

        let isLowerCase = alphabet == alphabet.toLowerCase()
        if(isLowerCase){
            camelCase += alphabet.toLowerCase()
        }else{
            if(doSpace) camelCase += ' '
            camelCase += alphabet.toUpperCase()
        }
    }

    if(prefixInstall && name[0] != 'I')
        name = `I${name}`

    return camelCase
}

/**
 * @description
 * Extracts the custom type name
 * defined in the typescript file.
 */
export const typeExtractor = (code): string[] => {
    let contexts = code
    contexts = contexts.split('\t').join('')
    contexts = contexts.split('    ').join('')
    contexts = contexts.split('export type ')[1].split('\n')
    contexts.shift()

    let list: any = []
    for(let context of contexts){
        //console.log(context)
        if(context[0] == '=' || context[0] == '|'){
            if(context[1] == ' '){
                context = context
                    .split('= ').join('')
                    .split('| ').join('')
                    .split('\r').join('')
                list.push(context)
            }
        }
    }
    return list
}

/**
 * @description
 * In some overwatch interfaces,
 * typedescript data type is sometimes used as it is.
 * This pure data type designation
 * must be extracted to form a generator.
 */
export const pureTypeNameExtractor = (name) => {
    let typeNames: string[] = []

    let word = ''
    for(let char of name.split('')){
        let isUpperCase = char.toUpperCase() == char
        if(word.length != 0 && isUpperCase){
            typeNames.push(word)
            word = ''
        }
        word += char
    }

    if(word.length != 0)
        typeNames.push(word)

    typeNames.pop()
    if(typeNames.length > 1){
        if(typeNames[0] == 'Value')
            typeNames.shift()
    }

    return typeNames.join('')
}

export const allUpperCaseToPascalCase = (
    name,
    doSpace = true,
    prefixRemove = false,
    prefixInstall = false
)=>{
    let camelCase = ''

    if(prefixRemove && name[0] == 'I'){
        let temp = name.split('')
        temp.shift()
        name = temp.join('')
    }

    for(let alphabetIndex in name.split('')){
        let alphabet = name[alphabetIndex]

        if(Number(alphabetIndex) == 0){
            camelCase += alphabet.toUpperCase()
            continue
        }

        try{
            let prevChar = name[Number(alphabetIndex)-1]
            if(prevChar == ' '){
                camelCase += alphabet.toUpperCase()
                continue
            }
        }catch(e){}

        camelCase += alphabet.toLowerCase()
    }

    if(prefixInstall && name[0] != 'I')
        name = `I${name}`

    return camelCase
}