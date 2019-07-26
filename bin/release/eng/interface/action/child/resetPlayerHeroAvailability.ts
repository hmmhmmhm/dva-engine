import { ValuePlayerType } from '../../../type'

/**
 * Restores the list of heroes available to
 * one or more players to the list specified
 * by the game settings. If a player’s current
 * hero becomes unavailable, the player is
 * forced to choose a different hero and respawn
 * at an appropriate spawn location.
 */
export interface IResetPlayerHeroAvailability {
    /**
     * Player - The player or players whose hero
     * list is being reset. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
}