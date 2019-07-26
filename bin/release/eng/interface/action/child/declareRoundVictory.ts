import { ValueTeamType } from '../../../type'

/**
 * Declare a team as the current round winner.
 * This only works in the control and elimination game modes.
 */
export interface IDeclareRoundVictory {
    /**
     * Team - Round winning team. Can use most
     * Team based Value Syntax for this value.
     */
    roundWinningTeam: ValueTeamType
}