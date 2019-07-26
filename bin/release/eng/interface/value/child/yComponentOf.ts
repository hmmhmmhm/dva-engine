import { ValueVectorType } from '../../../type'

/**
 * The Y Component of the specified Vector,
 * usually representing a upward amount.
 */
export interface IYComponentOf {
    /**
     * Value - The vector from which to acquire
     * the Y component. Can use most Vector based
     * Value Syntax to provide this value.
     */
    vector: ValueVectorType
}