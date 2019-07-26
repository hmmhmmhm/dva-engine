import { ValueVectorType } from '../../../type'

/**
 * The angle in degrees between two directional
 * vectors (no normalization required).
 */
export interface IAngleBetweenVectors {
    /**
     * Vector - One of two directional vectors
     * between which to measure the angle in degrees.
     * this vector does not need to be pre-normalized.
     */
    vector1: ValueVectorType

    /**
     * Vector - One of two directional vectors
     * between which to measure the angle in degrees.
     * this vector does not need to be pre-normalized.
     */
    vector2: ValueVectorType
}