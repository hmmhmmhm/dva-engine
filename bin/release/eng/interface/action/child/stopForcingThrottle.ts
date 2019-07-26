import { ValuePlayerType } from '../../../type'

/**
 * Undoes the effect of start forcing throttle
 * action for one or more players
 */
export interface IStopForcingThrottle {
    /**
     * Player - The player or players whose movement
     * inout will be restored. Can use most Player
     * based Value Syntax.
     */
    player: ValuePlayerType
}