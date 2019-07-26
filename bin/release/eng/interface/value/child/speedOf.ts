import { ValuePlayerType } from '../../../type'

/**
 * The current speed of a player in meters per second.
 */
export interface ISpeedOf {
    /**
     * Player - The player whose velocity to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
}