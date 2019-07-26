import { ValueTeamType } from '../../../type'

/**
 * An array containing all players occupying
 * neither a payload nor a control point (either
 * on a team or in a match).
 */
export interface IAllPlayersNotOnObjective {
    /**
     * Team - You can specify any Team Syntax to
     * define the array.
     */
    team: ValueTeamType
}