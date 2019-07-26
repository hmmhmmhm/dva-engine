import {
    ValuePlayerType
} from '../../../type'

/**
 * Whether the specified player’s secondary
 * weapon attack is being used.
 */
export interface IIsFiringSecondary {
    /**
     * Player - The player whose secondary weapon
     * attack to check. Can use most player based
     * Value Syntax to retrieve this value.
     */
    player: ValuePlayerType
}