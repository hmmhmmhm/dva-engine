import {
    ValuePlayerType,
    ValueHeroType,
} from '../../../type'

/**
 * Sets the list of heroes available to one
 * or more players. If a player’s current hero
 * becomes unavailable, the player is forced
 * to choose a different hero and respawn at
 * an appropriate spawn location.
 */
export interface ISetPlayerAllowedHeroes {
    /**
     * Player - The player or players whose hero
     * list is being set. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Hero - The hero or heroes that will be available.
     * If no heroes are provided, the action has
     * no effect. Can use most Hero based Value
     * Syntax for this value including compatible Arrays.
     */
    hero: ValueHeroType
}