import { ValueTeamType, ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * The players who are within a specific view
 * angle of a specific player’s reticle, optionally
 * restricted by team.
 */
export interface IPlayersInViewAngle {
    /**
     * Player - The player whose view to use for
     * the check. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
    /**
     * View Angle - The view angle to compare against
     * in degrees. Can use most Angle based Value
     * Syntax to provide this value.
     */
    team: ValueTeamType
    /**
     * Team - The team or teams on which to consider
     * players. Can use most Team based Value Syntax
     * to provide this value.
     */
    viewAngle: ValueNumberType
}