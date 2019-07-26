import { ValuePlayerType } from '../../../type'

/**
 * The current velocity of a player as a vector.
 * If the player is on a surface, the Y component
 * of this velocity will be 0m even when traveling
 * up or down a slope.
 */
export interface IVelocityOf {
    /**
     * Player - The player whose velocity to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
}