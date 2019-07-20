import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {46}
 */
export interface IHeal {
    /**
     * {192}
     */
    player: ValuePlayerType
    /**
     * {193}
     */
    healer: ValueAssisterParamType
    /**
     * {194}
     */
    amount: ValueNumberType
}