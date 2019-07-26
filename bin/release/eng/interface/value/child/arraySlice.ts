import {
    ValueArrayType,
    ValueNumberType
} from '../../../type'

/**
 * A copy of the specified array containing
 * only values from a specified index range.
 */
export interface IArraySlice {
    /**
     * Array - You must specify the Array Syntax
     * you are comparing the value to.
     */
    array: ValueArrayType

    /**
     * Start Index - The first index of the range.
     * Can use most Value Syntax to specify with.
     */
    index: ValueNumberType

    /**
     * Count - The number of elements in the resulting
     * array. The resulting array will contain
     * fewer elements if the specified range exceeds
     * the bounds of the array. Can use any Number-based
     * Value Syntax to specify with.
     */
    count: ValueNumberType
}