import { ValuePlayerType, ValueNumberType, ValueAssisterParamType } from '../../../type'

/**
 * Provides an instantaneous heal to one or
 * more players. This heal will not resurrect dead players.
 */
export interface IHeal {
    /**
     * Player - The player or players whose health
     * will be restored. Can use most Player based
     * Value Syntax for this value.
     */
    player: ValuePlayerType
    /**
     * Player - One or more players who will receive
     * the heal over time. Can use most Player
     * based Value Syntax.
     */
    healer: ValueAssisterParamType
    /**
     * Amount - The amount of healing to apply.
     * This amount may be modified by buffs or
     * debuffs, healing is capped by each player’s
     * max health. Can use most Number based Value
     * Syntax for this value.
     */
    amount: ValueNumberType
}