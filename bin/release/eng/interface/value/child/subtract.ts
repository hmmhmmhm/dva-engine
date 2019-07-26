import { ValueSubtractType } from '../../../type'

/**
 * The difference between two numbers or vectors.
 */
export interface ISubtract {
    /**
     * Value - The left-hand operand. May be any
     * value that results in a number or a vector.
     * Can use most Number based Value Syntax to
     * provide this value.
     */
    value1: ValueSubtractType
    /**
     * Value - The right-hand operand. May be any
     * value that results in a number or a vector.
     * Can use most Number based Value Syntax to
     * provide this value.
     */
    value2: ValueSubtractType
}