import { ValueVectorType } from '../../../type'

/**
 * The cross product of the specified values.
 */
export interface ICrossProduct {
    /**
     * Value - You must specify the first Value
     * Syntax to compare to the second.
     */
    value1: ValueVectorType

    /**
     * Value - You must specify the first Value
     * Syntax to compare to the second.
     */
    value2: ValueVectorType
}