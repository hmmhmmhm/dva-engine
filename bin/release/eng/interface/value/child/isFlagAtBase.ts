import {
    ValueTeamType
} from '../../../type'

/**
 * Whether a specific team’s flag is at its
 * base in capture the flag.
 */
export interface IIsFlagAtBase {
    /**
     * Team - The team whose whose flag to check.
     * Can use most Team based Value Syntax to
     * provide this value.
     */
    team: ValueTeamType
}