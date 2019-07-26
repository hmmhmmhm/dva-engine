import {
    ValuePlayerType, ValueNumberType,
} from '../../../type'

/**
 * Applies instantaneous damage to one or more
 * players, possibly killing the players.
 */
export interface IDamage {
    /**
     * Player - The player or players who will
     * receive damage. Can use most Player based
     * Value Syntax to select one or multiple players.
     */
    player: ValuePlayerType
    /**
     * Damager - The player who will receive credit
     * for the damage. A damager of null indicates
     * no player will receive credit. Can use most
     * Player based Value Syntax for this value.
     */
    damager: ValuePlayerType
    /**
     * Amount - The amount of damage to apply.
     * This amount may be modified by buffs, debuffs,
     * or armor. Can use most Number based Value Syntax.
     */
    amount: ValueNumberType
}