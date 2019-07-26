import { ValuePlayerType } from '../../../type'

/**
 * The max health of a player, including armor and shields.
 */
export interface IMaxHealth {
    /**
     * Player - The player whose max health to
     * compare. Can use any Player based Value
     * syntax to provide with.
     */
    player: ValuePlayerType
}