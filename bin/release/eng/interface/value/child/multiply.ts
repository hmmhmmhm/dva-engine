import { ValueMultiplyType } from '../../../type'

/**
 * The product of two numbers or vectors. A
 * vector multiplied by a number will yield
 * a scaled vector.
 */
export interface IMultiply {
    /**
     * Value - The left-hand operand. May be any
     * value that results in a number. Can use
     * most Number based Value Syntax to provide this value.
     */
    value1: ValueMultiplyType
    /**
     * Value - The right-hand operand. May be any
     * value that results in a number. Can use
     * most Number based Value Syntax to provide this value.
     */
    value2: ValueMultiplyType
}