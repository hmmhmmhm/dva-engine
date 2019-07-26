import { ValueVectorType } from '../../../type'

/**
 * The unit-length normalization of a vector.
 */
export interface INormalize {
    /**
     * Vector - The vector to normalize. Can use
     * any Vector based Value syntax to divide with.
     */
    position: ValueVectorType
}