import { ValuePlayerType } from '../../../type'

/**
 * Determines whether a player is alive. Returns
 * a Boolean value.
 */
export interface IIsAlive {
    /**
     * Player - The player whose life to check.
     * Can use most player based Value Syntax to
     * retrive this value.
     */
    player: ValuePlayerType
}