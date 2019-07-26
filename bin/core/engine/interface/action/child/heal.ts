import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {46}
 */
export interface IHeal {
    /**
     * {191}
     */
    player: ValuePlayerType
    /**
     * {192}
     */
    healer: ValueAssisterParamType
    /**
     * {193}
     */
    amount: ValueNumberType
}