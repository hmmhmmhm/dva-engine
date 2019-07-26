import { ValueNumberType } from '../../../type'

/**
 * The left-hand operand raised to the power
 * of the right-hand operand. For example 2 ^ 3 = 8
 */
export interface IRaiseToPower {
    /**
     * Value - The left-hand operand. May be any
     * value that results in a number. Can use
     * most Number based Value Syntax to provide this value.
     */
    value1: ValueNumberType
    /**
     * Value - The right-hand operand. May be any
     * value that results in a number. Can use
     * most Number based Value Syntax to provide this value.
     */
    value2: ValueNumberType
}