import { ValueTeamType } from '../../../type'

/**
 * Undoes the effect of start forcing spawn
 * room action for the specified team.
 */
export interface IStopForcingSpawnRoom {
    /**
     * Team - The team that will resume using their
     * normal spawn room. Can use most Team based Value Syntax.
     */
    team: ValueTeamType
}