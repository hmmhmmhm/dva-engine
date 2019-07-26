import {
    ValueTeamType
} from '../../../type'

/**
 * The position of a specific team’s flag in
 * Capture the Flag.
 */
export interface IFlagPosition {
    /**
     * Team - The team whose flag position to acquire.
     */
    team: ValueTeamType
}