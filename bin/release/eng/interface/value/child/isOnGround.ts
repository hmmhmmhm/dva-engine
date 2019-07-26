import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a player is on the ground (or other
 * walkable surface).
 */
export interface IIsOnGround {
    /**
     * Player - The player whose ground status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}