import { ValuePlayerType } from '../../../type'

/**
 * Stops the acceleration started by the start
 * accelerating action for one or more players.
 */
export interface IStopAccelerating {
    /**
     * Player - The player or players who will
     * stop accelerating. Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
}