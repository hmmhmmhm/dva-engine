export interface IRule {
    /**
     * @description
     * You can annotate this rule.
     * Type `''`
     */
    description?: string
    /**
     * @description
     * Please set event type.
     * - Type `RuleEvent.`
     */
    event: string
    /**
     * @description
     * Write conditional expression
     * or reference the condition variable
     * -  Condition operator is must use one of the following:
     *    `==`, `!=`, `<`, `<=`, `>`, `>=`, `===`
     * - To view a list of conditional value functions, Type `Value.`
     */
    condition: boolean[]
    /**
     * @description
     * - Type `Action.`
     */
    action: string[]
}

export default class Rule {
    public static collectedCodes: string[] = []
    constructor(data: IRule){
        let innerCode = ``

        innerCode += `rule("${data.description}")\n`
        innerCode += `{\n`

        innerCode += `\tevent\n`
        innerCode += `\t{\n`
        innerCode += `\t\t${data.event};\n`
        innerCode += `\t}\n\n`

        if(data.condition.length != 0){
            innerCode += `\tconditions\n`
            innerCode += `\t{\n`
            for(let condition of data.condition)
                innerCode += `\t\t${condition};\n`
            innerCode += `\t}\n\n`
        }

        if(data.action.length != 0){
            innerCode += `\tactions\n`
            innerCode += `\t{\n`
            for(let action of data.action)
                innerCode += `\t\t${action};\n`
            innerCode += `\t}\n`
        }

        innerCode += `}`
        Rule.collectedCodes.push(innerCode)
    }
}