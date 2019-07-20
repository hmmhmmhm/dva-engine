import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * {101}
 */
export interface IStartDamageOverTime {
    /**
     * {292}
     */
    player: ValuePlayerType
    /**
     * {293}
     */
    damager: ValueAssisterParamType
    /**
     * {294}
     */
    duration: ValueNumberType
    /**
     * {295}
     */
    damagePerSecond: ValueNumberType
}