import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether a player is dead.
 */
export interface IIsDead {
    /**
     * Player - The player whose death to check.
     * Can use most player based Value Syntax to
     * retrieve this value.
     */
    player: ValuePlayerType
}