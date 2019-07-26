import { ValueTeamType } from '../../../type'

/**
 * The team opposite the specified team.
 */
export interface IOppositeTeamOf {
    /**
     * Team - The team whose opposite to acquire.
     * If all, the result will be all. Can use
     * most Team based Value Syntax to provide this value.
     */
    team: ValueTeamType
}