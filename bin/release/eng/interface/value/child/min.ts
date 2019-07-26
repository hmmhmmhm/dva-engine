import { ValueNumberType } from '../../../type'

/**
 * The lesser of the two numbers. This will
 * return a numerical value of two number values compared.
 */
export interface IMin {
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