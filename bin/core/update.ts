import GithubUpdater from 'deploy-github'

export const Update = () => {
    GithubUpdater.automatic()
}

if(`${process.argv[1]}` == __filename) Update()