import { ValuePlayerType } from '../../../type'

/**
 * The number of final blows a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
export interface INumberOfFinalBlows {
    /**
     * Player - The player whose final blow count
     * to acquire. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
}