export const ruleCompare = (
    left: string,
    operatorToken: string,
    right: string
) => {
    return `${left} ${operatorToken} ${right}`
}