import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the aim speed of one or more players
 * to a percentage of their normal aim speed.
 */
export interface ISetAimSpeed {
    /**
     * Player - The player or players whose aim
     * will be set. Can use most Player based Value
     * Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Turn Speed Percent - The percentage of normal
     * aim speed to which the player or players
     * will set their aim speed. Can use most Number
     * based Value Syntax.
     */
    turnSpeedPercent: ValueNumberType
}