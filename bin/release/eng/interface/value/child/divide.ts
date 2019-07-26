import { ValueDivideType } from '../../../type'

/**
 * The ratio of two numbers or vectors. A vector
 * divided by a number will yield a scaled
 * vector. Division by zero results in zero.
 */
export interface IDivide {
    /**
     * Value - The left-hand operand, may be any
     * value that results in a number or a vector.
     * Any Value Syntax may be used here.
     */
    value1: ValueDivideType

    /**
     * Value - The right-hand operand, may be any
     * value that results in a number or a vector.
     * Any Value Syntax may be used here.
     */
    value2: ValueDivideType
}