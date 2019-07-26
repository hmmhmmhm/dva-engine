import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether a player is airborne.
 */
export interface IIsInAir {
    /**
     * Player - The player whose airborne status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}