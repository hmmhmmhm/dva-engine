import {
    ValuePlayerType,
    ValueStatusType
} from '../../../type'

/**
 * Whether the specified player has the specified
 * status, either from the set status action
 * or from a non-scripted game mechanic.
 */
export interface IHasStatus {
    /**
     * Player - The player whose status to check.
     */
    player: ValuePlayerType
    /**
     * Status - The status to check for. Values
     * include Hacked, Burning, Knocked Down, Asleep,
     * Frozen, Unkillable, Invincible, Phased Out,
     * Rooted, or Stunned.
     */
    status: ValueStatusType
}