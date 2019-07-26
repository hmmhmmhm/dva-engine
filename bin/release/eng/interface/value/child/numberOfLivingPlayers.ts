import {
    ValueTeamType
} from '../../../type'

/**
 * The number of living players on a team or in the match.
 */
export interface INumberOfLivingPlayers {
    /**
     * Team - The team or teams on which to count
     * players. Can use most Team based Value Syntax
     * to provide this value.
     */
    team: ValueTeamType
}