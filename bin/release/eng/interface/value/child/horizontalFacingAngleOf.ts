import { ValuePlayerType } from '../../../type'

/**
 * The directional angle in degrees of a player’s
 * current facing relative to the world. This
 * value increases as the player rotates to
 * the left (wrapping around at +/- 180).
 */
export interface IHorizontalFacingAngleOf {
    /**
     * Player - The player whose facing direction
     * to acquire. Can use most player based Value
     * Syntax to retrieve this value.
     */
    player: ValuePlayerType
}