interface IRule {
    description?: string
    /**
     * @description
     * Type `RuleEvent`
     */
    event
    condition: any[]
    action: string[]
}

export default class Rule {
    constructor(data: IRule){
        //
    }
}