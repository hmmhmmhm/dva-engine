import { existsSync, writeFileSync } from 'fs'

/**
 * @description
 * Generator Indexer
 */
export const Indexer = async (langs: string[] = [ 'kor' ]) => {

    // Generate `release/{lang}/index.ts`
    let subLangIndexCode = ``
    subLangIndexCode += `import * as Classes from './reformer'\r\n`
    subLangIndexCode += `export { Classes }\r\n`
    subLangIndexCode += `export * from './resolver'\r\n`
    for(let lang of langs){
        if(!existsSync(`${process.cwd()}/bin/release/${lang}/index.ts`))
            writeFileSync(`${process.cwd()}/bin/release/${lang}/index.ts`, subLangIndexCode)
    }

    // Generate `release/index.ts`
    if(!existsSync(`${process.cwd()}/bin/release/index.ts`)){
        let releaseIndexCode = ``
        for(let lang of langs)
            releaseIndexCode += `import * as ${lang} from './${lang}'\n`
        releaseIndexCode += `export {\n`
        releaseIndexCode += `    ${langs.join(`,\n    `)}\n}`
        writeFileSync(`${process.cwd()}/bin/release/index.ts`, releaseIndexCode)
    }
}