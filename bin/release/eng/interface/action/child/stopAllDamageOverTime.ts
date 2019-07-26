import { ValuePlayerType } from '../../../type'

/**
 * Stops all damage over time started by the
 * start damage over time or one or more players.
 */
export interface IStopAllDamageOverTime {
    /**
     * Player - The player or players whose scripted
     * damage over time will stop. Can use most
     * Player based Value Syntax.
     */
    player: ValuePlayerType
}