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

class Rule {
    constructor(data: IRule){
        //
    }
}

export default Rule