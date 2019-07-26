import { ValueVectorType } from '../../../type'

/**
 * The Z Component of the specified Vector,
 * usually representing a forward amount.
 */
export interface IZComponentOf {
    /**
     * Value - The vector from which to acquire
     * the Z component. Can use most Vector based
     * Value Syntax to provide this value.
     */
    vector: ValueVectorType
}