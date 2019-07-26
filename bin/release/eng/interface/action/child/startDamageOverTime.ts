import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * Starts an instance of damage over time,
 * this DOT will persist for the specified
 * duration or until stopped by script. To
 * obtain a reference to this DOT, use the
 * last damage over time to value.
 */
export interface IStartDamageOverTime {
    /**
     * Receivers - One or more players who will
     * receive the damage over time. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Damager - The player who will receive credit
     * for the damage. A damager of null indicates
     * no player will receive credit. Can use most
     * Player based Value Syntax.
     */
    damager: ValueAssisterParamType
    /**
     * Duration - The duration of the damage over
     * time in seconds. To have a DOT that lasts
     * until stopped by script, provide an arbitrarily
     * long duration such as 9999. Can use most
     * Number based Value Syntax to specify.
     */
    duration: ValueNumberType
    /**
     * Damage Per Second - The damage per second
     * for the damage over time. Can use most Number
     * based Value Syntax to specify.
     */
    damagePerSecond: ValueNumberType
}