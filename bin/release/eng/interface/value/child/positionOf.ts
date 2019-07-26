import { ValuePlayerType } from '../../../type'

/**
 * The current position of a player as a vector.
 */
export interface IPositionOf {
    /**
     * Player - The player whose position to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
}