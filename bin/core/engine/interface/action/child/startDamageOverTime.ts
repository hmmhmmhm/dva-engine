import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {101}
 */
export interface IStartDamageOverTime {
    /**
     * {291}
     */
    player: ValuePlayerType
    /**
     * {292}
     */
    damager: ValueAssisterParamType
    /**
     * {293}
     */
    duration: ValueNumberType
    /**
     * {294}
     */
    damagePerSecond: ValueNumberType
}