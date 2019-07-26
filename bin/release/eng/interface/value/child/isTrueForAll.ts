import {
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * Whether the specified condition evaluates
 * to true for every value in the specified array.
 */
export interface IIsTrueForAll {
    /**
     * Array - The array whose values will be considered.
     * Can use most Array Based Value Syntax to
     * retrieve this value.
     */
    array: ValueArrayType

    /**
     * Condition - The condition that is evaluated
     * for each element of the specified array,
     * Use the current array element value to reference
     * the element of the array currently being
     * considered. Can use most Comparative based
     * Value Syntax to retrieve this value.
     */
    condition: ValueBoolType
}