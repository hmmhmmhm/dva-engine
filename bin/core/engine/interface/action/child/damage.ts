import {
    ValuePlayerType, ValueNumberType,
} from '../../../type'

/**
 * {17}
 */
export interface IDamage {
    /**
     * {174}
     */
    player: ValuePlayerType
    /**
     * {175}
     */
    damager: ValuePlayerType
    /**
     * {176}
     */
    amount: ValueNumberType
}