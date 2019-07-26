import { ValueArrayType, ValueType } from '../../../type'

/**
 * A copy of an array with one or more values
 * removed (if found).
 */
export interface IRemoveFromArray {
    /**
     * Array - The array from which to remove values.
     * Can use most Array based Value Syntax to
     * provide this value.
     */
    array: ValueArrayType

    /**
     * Value - The value to remove from the array
     * (if found), if this value itself an array,
     * each matching element is removed. Can use
     * most Array based or Number based Value Syntax
     * to provide this value.
     */
    value: ValueType
}