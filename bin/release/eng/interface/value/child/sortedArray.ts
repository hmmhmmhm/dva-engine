import { ValueArrayType, ValueType } from '../../../type'

/**
 * A copy of the specified array with the values
 * sorted according to the value rank that
 * is evaluated for each element.
 */
export interface ISortedArray {
    /**
     * Array - The array whose copy will be sorted.
     * Can use most Array based Value Syntax to
     * provide this value.
     */
    array: ValueArrayType
    /**
     * Value Rank - The value that is evaluated
     * for each element of the copied array. The
     * array is sorted by this rank in ascending
     * order. Use the current array element value
     * to reference the element of the array currently
     * being considered. Can use most Number based
     * Value Syntax to provide this value.
     */
    valueRank: ValueType
}