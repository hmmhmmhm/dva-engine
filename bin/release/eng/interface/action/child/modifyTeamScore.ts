import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * Modifies the score of one or both teams.
 * This action has not effect in free-for-all
 * modes or modes without a team score.
 */
export interface IModifyTeamScore {
    /**
     * Score - The amount the score will increase
     * or decrease. If positive, the score will
     * increase. If negative, the score will decrease.
     * Can use most Number based Value Syntax for this value.
     */
    team: ValueTeamType
    /**
     * Team - The team whose score will be changed.
     * Can use most Player based Value Syntax for this value.
     */
    score: ValueNumberType
}