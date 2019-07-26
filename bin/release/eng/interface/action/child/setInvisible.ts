import { ValuePlayerType, ValueInvisibleToType } from '../../../type'

/**
 * Causes one or more players to become invisible
 * to either all other players or just enemies.
 */
export interface ISetInvisible {
    /**
     * Player - The player or players who will
     * become invisible. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Invisible to - Specifies for whom the player
     * or players will be invisible. Can be set
     * to All, Enemies, or None.
     */
    invisibleTo: ValueInvisibleToType
}