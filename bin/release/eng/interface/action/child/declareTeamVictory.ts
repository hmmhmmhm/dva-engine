import { ValueTeamType } from '../../../type'

/**
 * Instantly ends the match with the specified
 * team as the winner. This action has no effect
 * in free-for-all modes.
 */
export interface IDeclareTeamVictory {
    /**
     * Team - The winning team. Can use most Team
     * based Value Syntax for this value.
     */
    team: ValueTeamType
}