import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether a player is crouching.
 */
export interface IIsCrouching {
    /**
     * Player - The player whose crouching status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}