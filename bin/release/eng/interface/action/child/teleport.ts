import { ValuePlayerType, ValueVectorType } from '../../../type'

/**
 * Teleports one or more players to the specified location.
 */
export interface ITeleport {
    /**
     * Player - The player or players to teleport.
     * Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Position - The position to which the player
     * or players will teleport. If a player is
     * providedm the position of the player is
     * used. Can use most Vector based Value Syntax.
     */
    position: ValueVectorType
}