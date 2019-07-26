import { ValuePlayerType } from '../../../type'

/**
 * Stops the turning started by the start facing
 * action for or one or more players.
 */
export interface IStopFacing {
    /**
     * Player - The player or players who will
     * stop turning. Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
}