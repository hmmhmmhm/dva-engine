import { ValueAddType } from '../../../type'

/**
 * The sum of two numbers or vectors. This
 * value will add the two specified values.
 */
export interface IAdd {
    /**
     * Value - You can specify any Value Syntax
     * to define either addend.
     */
    value1: ValueAddType
    
    /**
     * Value - The right-hand operand. may be any
     * value that results in a number or a vector.
     */
    value2: ValueAddType
}