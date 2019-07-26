import { ValuePlayerType } from '../../../type'

/**
 * Stops forcing one or more players to be
 * a specified hero. This will not respawn
 * the player or players, but it will restore
 * their availablity the next time they go
 * to select a hero.
 */
export interface IStopForcingPlayerToBeHero {
    /**
     * Player - The player or players who will
     * no longer be forced to be a specific hero.
     * Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
}