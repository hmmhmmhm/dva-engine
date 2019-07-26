import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * Starts an instance of damage over time,
 * this HOT will persist for the specified
 * duration or until stopped by script. To
 * obtain a reference to this HOT, use the
 * last damage over time to value.
 */
export interface IStartHealOverTime {
    /**
     * Healer - The player who will receive credit
     * for the heal. A damager of null indicates
     * no player will receive credit. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Player - One or more players who will receive
     * the heal over time. Can use most Player
     * based Value Syntax.
     */
    healer: ValueAssisterParamType
    /**
     * Duration - The duration of the heal over
     * time in seconds. To have a HOT that lasts
     * until stopped by script, provide an arbitrarily
     * long duration such as 9999. Can use most
     * Number based Value Syntax to specify.
     */
    duration: ValueNumberType
    /**
     * Damage Per Second - The heal per second
     * for the heal over time. Can use most Number
     * based Value Syntax to specify.
     */
    healingPerSecond: ValueNumberType
}