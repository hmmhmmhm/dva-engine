import { ValuePlayerType } from '../../../type'

/**
 * The directional input of a player, represented
 * by a vector with a horizontal input on the
 * X component (positive to the left) and vertical
 * input on the Z component (positive upward).
 */
export interface IThrottleOf {
    /**
     * Player - The player whose directional input
     * to acquire. Can use most Player based Value
     * Syntax to provide this value.
     */
    player: ValuePlayerType
}