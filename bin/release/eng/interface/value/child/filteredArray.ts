import {
    ValueArrayType,
    ValueBoolType,
} from '../../../type'

/**
 * A copy of the specified array with any values
 * that do not match the specified condition removed.
 */
export interface IFilteredArray {
    array: ValueArrayType
    condition: ValueBoolType
}