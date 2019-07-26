import { ValuePlayerType, ValueAssisterParamType } from '../../../type'

/**
 * Instantly kills one or more players.
 */
export interface IKill {
    /**
     * Player - The player or players who will
     * be killed. Can use most Player based Value
     * Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Killer - The player who will receive credit
     * for the kill. A killer of null indicates
     * no player will receive credit. Can use most
     * Player based Value Syntax for this value.
     */
    killer: ValueAssisterParamType
}