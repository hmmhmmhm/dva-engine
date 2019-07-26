import { ValuePlayerType } from '../../../type'

/**
 * Instantly ends the match with the specific
 * player as the winner. This action only has
 * an effect in free-for-all modes.
 */
export interface IDeclarePlayerVictory {
    /**
     * Player - The winning player. Can use most
     * Player based Value Syntax for this value.
     */
    player: ValuePlayerType
}