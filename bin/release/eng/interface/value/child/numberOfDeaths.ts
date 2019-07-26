import { ValuePlayerType } from '../../../type'

/**
 * The number of deaths a specific player has
 * earned. This value only accumulates while
 * a game is in progress.
 */
export interface INumberOfDeaths {
    /**
     * Player - The player whose death count to
     * acquire. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
}