import { ValueTeamType } from '../../../type'

/**
 * The player carrying a particular team’s
 * flag in capture the flag. Results in null
 * if no player is carrying the flag.
 */
export interface IPlayerCarryingFlag {
    /**
     * Team - The team whose whose flag to check.
     * Can use most Team based Value Syntax to
     * provide this value.
     */
    team: ValueTeamType
}