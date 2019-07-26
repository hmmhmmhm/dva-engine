import { ValueTeamType } from '../../../type'

/**
 * The number of players occupying a payload
 * or a control point (either on a team or in the match).
 */
export interface INumberOfPlayersOnObjective {
    /**
     * Team - The team or teams on which to count
     * players. Can use most Team based Value Syntax
     * to provide this value.
     */
    team: ValueTeamType
}