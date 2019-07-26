import {
    ValuePlayerType,
} from '../../../type'

/**
 * Whether a specific player is currently occupying
 * a payload or capture point.
 */
export interface IIsOnObjective {
    /**
     * Player - The player whose objective status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}