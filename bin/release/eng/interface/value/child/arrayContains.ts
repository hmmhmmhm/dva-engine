import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * Whether the specified array contains the
 * specified value.
 */
export interface IArrayContains {
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