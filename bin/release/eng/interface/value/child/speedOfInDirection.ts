import { ValuePlayerType, ValueVectorType } from '../../../type'

/**
 * The current speed of a player in a specific
 * direction in meters per second.
 */
export interface ISpeedOfInDirection {
    /**
     * Player - The player whose velocity to acquire.
     * Can use most Player based Value Syntax to
     * provide this value.
     */
    player: ValuePlayerType
    /**
     * Direction - The direction of travel in which
     * to measure the player’s speed. Can use most
     * Vector based Value Syntax to provide this value.
     */
    direction: ValueVectorType
}