import { ValueTeamType } from '../../../type'

/**
 * Whether the specified team is currently
 * on offense in a standard match.
 */
export interface IIsTeamOnOffense {
    /**
     * Team - The team whose role to check. Can
     * use most Team Based Value Syntax to retrieve this value.
     */
    team: ValueTeamType
}