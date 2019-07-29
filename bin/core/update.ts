import * as GithubUpdater from 'easy-github-updater'

export const Update = () => {
    GithubUpdater.automatic({
        sourceFolderPath: process.cwd(),
        force: true,
        rebase: true,
        keep: [
            '/src/*'
        ],
        branch: 'master',
        isNeedDefaultProcess: true,
        repoUrl: undefined,
        waitTime: 10000
    })
}

if(`${process.argv[1]}` == __filename) Update()