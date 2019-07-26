import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the duration between death and respawn
 * for one or more players that are already
 * dead when this action is executed, the change
 * takes effect on their next death.
 */
export interface ISetRespawnMaxTime {
    /**
     * Player - The player or players whose respawn
     * max time will is being defined. Can use
     * most Player based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Time - The duration between death and respawn
     * in seconds. Can use most Number based Value
     * Syntax for this value.
     */
    time: ValueNumberType
}