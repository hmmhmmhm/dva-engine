import {
    ValuePlayerType,
    ValueNumberType,
} from '../../../type'

/**
 * Sets the score (kill count) of one or more
 * players. This action only has an effect
 * in free-for-all modes.
 */
export interface ISetPlayerScore {
    /**
     * Player - The player or players whose score
     * will be set. Can use most Player based Value
     * Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Team - The team or teams whose score will
     * be set. Can use most Team based Value Syntax for this value.
     */
    score: ValueNumberType
}