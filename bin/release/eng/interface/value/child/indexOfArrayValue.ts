import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * The index of a value within an array or
 * -1 if no such value can be found.
 */
export interface IIndexOfArrayValue {
    /**
     * Array - The array in which to search for
     * the specified value. Can use most Array
     * based Value Syntax to retrieve this value.
     */
    array: ValueArrayType
    /**
     * Value - The value for which to search. Can
     * use most Number based Value Syntax to retrive this value.
     */
    value: ValueType
}