import { ValueTeamType } from '../../../type'

/**
 * The current score for the specified team.
 * Results in a 0 in free-for-all game modes.
 */
export interface ITeamScore {
    /**
     * Team - The team whose score to acquire.
     * Can use most Team based Value Syntax to
     * provide this value.
     */
    team: ValueTeamType
}