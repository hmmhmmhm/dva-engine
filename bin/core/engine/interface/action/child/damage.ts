import {
    ValuePlayerType, ValueNumberType,
} from '../../../type'

/**
 * {17}
 */
export interface IDamage {
    /**
     * {175}
     */
    player: ValuePlayerType
    /**
     * {176}
     */
    damager: ValuePlayerType
    /**
     * {177}
     */
    amount: ValueNumberType
}