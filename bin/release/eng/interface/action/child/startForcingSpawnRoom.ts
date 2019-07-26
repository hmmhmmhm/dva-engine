import { ValueTeamType, ValueNumberType } from '../../../type'

/**
 * Forces a team to spawn in a particular spawn
 * room, regardless of the sapwn room normally
 * used by the game mode. This action only
 * has an effect in Assault, Hybrid, and Payload Maps.
 */
export interface IStartForcingSpawnRoom {
    /**
     * Team - The team whose spawn room will be
     * forced. Can use most Team based Value Syntax.
     */
    team: ValueTeamType
    /**
     * Room - The number of the spawn room to be
     * forced. 0 is the first spawn room, 1 is
     * the second, and 2 is the third. If this
     * specified spawn room does not exist. Players
     * will use the normal spawn room. Can use
     * most Number based Value Syntax.
     */
    room: ValueNumberType
}