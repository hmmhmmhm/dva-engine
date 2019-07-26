import { ValueNumberType } from '../../../type'

/**
 * The square root of the specified value.
 * For example the square root of 9 is 3.
 */
export interface ISquareRoot {
    /**
     * Value - The real number value whose square
     * root will be computed. Negative values result
     * in zero. Can use most Number based Value
     * Syntax to provide this value.
     */
    value: ValueNumberType
}