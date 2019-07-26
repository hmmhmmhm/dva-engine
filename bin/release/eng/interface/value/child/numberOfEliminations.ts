import { ValuePlayerType } from '../../../type'

/**
 * The number of eliminations a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
export interface INumberOfEliminations {
    /**
     * Player - The player whose elimination count
     * to acquire. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
}