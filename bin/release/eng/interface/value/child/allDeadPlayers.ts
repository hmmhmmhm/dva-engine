import { ValueTeamType } from '../../../type'

/**
 * An array containing all dead players on
 * a team in a match. A player is defined as
 * being dead when they are eliminated but
 * have not yet respawned back into the game.
 */
export interface IAllDeadPlayers {
    /**
     * Team - You can specify any Team Syntax to
     * define the array.
     */
    team: ValueTeamType
}