import {
    ValuePlayerType,
    ValueTeamType,
} from '../../../type'

/**
 * The player closest to the reticle of the
 * specified player, optionally restricted by team.
 */
export interface IPlayerClosestToReticle {
    /**
     * Player - The player from whose reticle to
     * search for the closest player. Can use most
     * Player based Value Syntax to provide this value.
     */
    player: ValuePlayerType
    /**
     * Team - The team or teams on which to search
     * for the closest player. Can use most Team
     * based Value Syntax to provide this value.
     */
    team: ValueTeamType
}