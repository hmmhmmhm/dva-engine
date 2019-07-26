import {
    ValueNumberType,
    ValueRoundingType,
} from '../../../type'

/**
 * The integer to which the specified value rounds.
 */
export interface IRoundToInteger {
    /**
     * Value - The real number to round. Can use
     * most Number based Value Syntax to provide this value.
     */
    value: ValueNumberType
    /**
     * Rounding Type - Determines the direction
     * in which the value will be rounded. You
     * can round up, down, or to the nearest integer.
     */
    roundingType: ValueRoundingType
}