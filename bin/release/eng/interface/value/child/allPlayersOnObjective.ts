import { ValueTeamType } from '../../../type'

/**
 * An array containing all players occupying
 * either a payload or a control point (either
 * on a team or in a match).
 */
export interface IAllPlayersOnObjective {
    /**
     * Team - You can specify any Team Syntax to
     * define the array.
     */
    team: ValueTeamType
}