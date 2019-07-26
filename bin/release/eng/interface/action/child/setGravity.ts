import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the movement gravity for one or more
 * players to a percentage of regular movement gravity.
 */
export interface ISetGravity {
    /**
     * Player - The player or players whose healing
     * dealt will be set. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Healing Dealt Percent - The percentage of
     * raw healing dealt to which the player or
     * players will set their healing dealt. Can
     * use most Number based Value Syntax.
     */
    gravityPercent: ValueNumberType
}