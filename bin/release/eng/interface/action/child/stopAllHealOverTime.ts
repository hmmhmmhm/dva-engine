import { ValuePlayerType } from '../../../type'

/**
 * Stops all heal over time started by the
 * start heal over time or one or more players.
 */
export interface IStopAllHealOverTime {
    /**
     * Player - The player or players whose scripted
     * heal over time will stop. Can use most Player
     * based Value Syntax.
     */
    player: ValuePlayerType
}