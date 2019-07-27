export const StageRunner = (stageNumber: number, lang = `eng`) => {
    require(`${__dirname}/${lang}/make_stage${stageNumber}`)()
}

// for CLI Command Run
try{
    if(`${process.argv[1]}` == __filename)
        StageRunner(Number(process.argv[2]), process.argv[3])
}catch(e){}