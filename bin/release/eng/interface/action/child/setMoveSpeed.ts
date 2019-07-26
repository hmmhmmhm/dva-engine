import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the move speed of one or more players
 * to a percentage of their raw move speed.
 */
export interface ISetMoveSpeed {
    /**
     * Health Percent - The percentage of raw move
     * speed to which the player or players will
     * set their move speed. Can use most Number
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Player - The player or players whose move
     * speed will be set. Can use most Player based
     * Value Syntax for this value.
     */
    moveSpeedPercent: ValueNumberType
}