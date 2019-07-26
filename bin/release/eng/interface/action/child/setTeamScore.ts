import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * Sets the score for one or both teams. This
 * action has no effect in free-for-all modes
 * or modes without a team score.
 */
export interface ISetTeamScore {
    /**
     * Score - The score that will be set. Can
     * use most Number based Value Syntax for this value.
     */
    team: ValueTeamType
    /**
     * Team - The team or teams whose score will
     * be set. Can use most Team based Value Syntax for this value.
     */
    score: ValueNumberType
}