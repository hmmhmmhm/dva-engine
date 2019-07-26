import {
    ValueArrayType,
    ValueType
} from '../../../type'

/**
 * A copy of an array with one or more values
 * appended to the end.
 */
export interface IAppendToArray {
    /**
     * Array - You must specify the Array Syntax
     * you are adding the value to.
     */
    array: ValueArrayType

    /**
     * Value - You must specify the Value Syntax
     * that you are adding to the array.
     */
    value: ValueType
}