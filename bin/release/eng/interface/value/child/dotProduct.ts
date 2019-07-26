import { ValueVectorType } from '../../../type'

/**
 * The dot product of the specified values.
 * The dot product tells you what amount of
 * one vector goes in the direction of another.
 */
export interface IDotProduct {
    /**
     * Value - One of the two vector operands of
     * the dot product. Any positional based Syntax
     * may be used here.
     */
    value1: ValueVectorType

    /**
     * Value - One of the two vector operands of
     * the dot product. Any positional based Syntax
     * may be used here.
     */
    value2: ValueVectorType
}