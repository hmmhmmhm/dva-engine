import { ValueTeamType } from '../../../type'

/**
 * An array containing all living players on
 * a team in a match. A player is defined as
 * being alive when they are spawned into the
 * game but have not yet been eliminated since spawning.
 */
export interface IAllLivingPlayers {
    /**
     * Team - You can specify any Team Syntax to
     * define the array.
     */
    team: ValueTeamType
}