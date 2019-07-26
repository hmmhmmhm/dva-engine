import { ValueNumberType } from '../../../type'

/**
 * A random integer between the specified min
 * and max, inclusive.
 */
export interface IRandomInteger {
    /**
     * MIN - The smallest integer allowed. If a
     * real number is provided to this input, it
     * is rounded to the nearest integer. Can use
     * most Number based Value Syntax to provide this value.
     */
    min: ValueNumberType
    /**
     * MAX - The largest integer allowed. If a
     * real number is provided to this input, it
     * is rounded to the nearest integer. Can use
     * most Number based Value Syntax to provide this value.
     */
    max: ValueNumberType
}