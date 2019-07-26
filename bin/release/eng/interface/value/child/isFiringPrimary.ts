import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether the specified player’s primary weapon
 * attack is being used.
 */
export interface IIsFiringPrimary {
    /**
     * Player - The player whose primary weapon
     * attack to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
}