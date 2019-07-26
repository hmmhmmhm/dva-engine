import { ValuePlayerType } from '../../../type'

/**
 * The current health of a player. including
 * armor and shields, normalized between 0
 * and 1. (for example, 0 is no health, 0.5
 * is half health, 1 is full health, etc.)
 */
export interface INormalizedHealth {
    /**
     * Player - The player whose normalized health to acquire.
     */
    player: ValuePlayerType
}