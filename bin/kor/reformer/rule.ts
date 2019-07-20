interface IRule {
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
    constructor(data: IRule){
        //
    }
}