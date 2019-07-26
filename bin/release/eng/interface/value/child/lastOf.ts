import { ValueArrayType } from '../../../type'

/**
 * The value at the end of the specified array.
 * Results in a 0 if the specified array is empty.
 */
export interface ILastOf {
    /**
     * Array - The array from which the value is
     * created. Can use most Array based Value
     * Syntax to provide this data.
     */
    array: ValueArrayType
}