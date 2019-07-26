import { ValuePlayerType } from '../../../type'

/**
 * Undoes the effect of the enable death spectate
 * all players action for one or more players.
 */
export interface IDisableDeathSpectateAllPlayers {
    /**
     * Player - The player or players whose default
     * death spectate behavior is restored. Can
     * use most Player based Value Syntax for this value.
     */
    player: ValuePlayerType
}