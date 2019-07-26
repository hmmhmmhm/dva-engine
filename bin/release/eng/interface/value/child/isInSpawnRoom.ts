import { ValuePlayerType } from '../../../type'

/**
 * Whether a specific player is in the spawn
 * room (and is thus being healed and able
 * to change heroes).
 */
export interface IIsInSpawnRoom {
    /**
     * Player - The player whose spawn room status
     * to check. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}