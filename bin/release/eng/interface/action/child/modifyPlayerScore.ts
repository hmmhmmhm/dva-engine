import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Modifies the score (kill count) of one or
 * more players. This action only has an effect
 * in free-for-all modes.
 */
export interface IModifyPlayerScore {
    /**
     * Player - The player whose score will change.
     * Can use most Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Team - The team whose score will be changed.
     * Can use most Player based Value Syntax for this value.
     */
    score: ValueNumberType
}