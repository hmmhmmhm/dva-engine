import { ValueVectorType } from '../../../type'

/**
 * The X Component of the specified Vector,
 * usually representing a leftward amount.
 */
export interface IXComponentOf {
    /**
     * Value - The vector from which to acquire
     * the X component. Can use most Vector based
     * Value Syntax to provide this value.
     */
    vector: ValueVectorType
}