import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the max health of one or more players
 * as a percentage of their raw max health.
 * This action will ensure that a player’s
 * current health will not exceed the new max health.
 */
export interface ISetMaxHealth {
    /**
     * Player - The player or players whose max
     * health will be set. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Player - The player or players whose move
     * speed will be set. Can use most Player based
     * Value Syntax for this value.
     */
    healthPercent: ValueNumberType
}