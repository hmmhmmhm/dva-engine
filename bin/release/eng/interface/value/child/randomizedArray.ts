import { ValueArrayType } from '../../../type'

/**
 * A copy of the specified array with the values
 * in a random order
 */
export interface IRandomizedArray {
    /**
     * Array - The array whose copy will be randomized.
     * Can use most Array based Value Syntax to
     * provide this value.
     */
    array: ValueArrayType
}