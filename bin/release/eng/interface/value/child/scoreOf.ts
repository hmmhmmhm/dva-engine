import { ValuePlayerType } from '../../../type'

/**
 * The current score of a player. Results in
 * 0 if the game mode is not free-for-all.
 */
export interface IScoreOf {
    /**
     * Player - The player whose score to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
}