import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the ultimate charge or one or more
 * players as a percentage of maximum charge.
 */
export interface ISetUltimateCharge {
    /**
     * Player - The player or players whose ultimate
     * charge will be set. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Charge Percent - The percentage of maximum
     * charge. Can use most Number based Value Syntax.
     */
    chargePercent: ValueNumberType
}