import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a player is standing (defined as
 * both not moving and not in the air).
 */
export interface IIsStanding {
    /**
     * Player - The player whose standing status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}