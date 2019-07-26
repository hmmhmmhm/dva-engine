import { ValuePlayerType, ValueVectorType } from '../../../type'

/**
 * Sets the facing of one or more players to
 * the specified direction.
 */
export interface ISetFacing {
    /**
     * Player - The player or players whose facing
     * will be set. Can use most Player based Value
     * Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Direction - The unit direction in which
     * the player or players will face. This value
     * is normalized internally. Can use most Vector
     * based Value Syntax.
     */
    direction: ValueVectorType
}