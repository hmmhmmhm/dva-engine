import { ValuePlayerType, ValueNumberType } from '../../../type'

/**
 * Sets the healing received of one or more
 * players to a percentage of their raw healing
 * received. NOTE: Negative values do not damage
 * enemies. Healing values of 0 or lower will
 * not trigger script events.
 */
export interface ISetHealingReceived {
    /**
     * Player - The player or players whose healing
     * received will be set. Can use most Player
     * based Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Healing Received Percent - The percentage
     * of raw healing received to which the player
     * or players will set their healing received.
     * Can use most Number based Value Syntax.
     */
    healingReceivedPercent: ValueNumberType
}