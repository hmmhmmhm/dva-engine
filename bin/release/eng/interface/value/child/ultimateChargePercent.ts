import { ValuePlayerType } from '../../../type'

/**
 * The current ultimate ability charge percentage of a player.
 */
export interface IUltimateChargePercent {
    /**
     * Player - The player whose ultimate charge
     * percentage to acquire. Can use most Player
     * based Value Syntax to provide this value.
     */
    player: ValuePlayerType
}