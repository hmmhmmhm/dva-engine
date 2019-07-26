import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the damage received of one or more
 * players to a percentage of their raw damage
 * received. NOTE: Negative values do not heal
 * enemies. Damage values of 0 or lower will
 * not trigger script events.
 */
export interface ISetDamageReceived {
    /**
     * Player - The player or players whose damage
     * received will be set. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Damage Received Percent - The percentage
     * of raw damage received to which the player
     * or players will set their damage received.
     * Can use most Number based Value Syntax.
     */
    damageReceivedPercent: ValueNumberType
}