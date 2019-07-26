import { ValueTeamType } from '../../../type'

/**
 * The number of dead players on a team or in the match.
 */
export interface INumberOfDeadPlayers {
    /**
     * Team - The team or teams on which to count
     * players. Can use most Team based Value Syntax
     * to provide this value.
     */
    team: ValueTeamType
}