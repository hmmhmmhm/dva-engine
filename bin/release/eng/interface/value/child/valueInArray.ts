import {
    ValueArrayType,
    ValueNumberType,
} from '../../../type'

/**
 * The value found at a specific element of
 * an array. Results in a 0 if the element does not exist.
 */
export interface IValueInArray {
    /**
     * Array - The array whose element to acquire.
     * Can use most Array based Value Syntax to
     * provide this value.
     */
    array: ValueArrayType
    /**
     * Index - The index whose element to acquire.
     * Can use most Number based Value Syntax to
     * provide this value.
     */
    index: ValueNumberType
}