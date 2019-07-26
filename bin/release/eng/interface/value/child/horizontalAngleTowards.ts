import {
    ValueVectorType,
    ValuePlayerType,
} from '../../../type'

/**
 * The horizontal angle in degrees from a player’s
 * current forward direction to the specified
 * position. The result is positive if the
 * position is on the player’s left, otherwise
 * the result is zero or negative.
 */
export interface IHorizontalAngleTowards {
    /**
     * Player - The player whose current facing
     * angle begins. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
    /**
     * Position - The player whose current facing
     * the angle begins. Can use most Player based
     * Value Syntax to provide this value.
     */
    position: ValueVectorType
}