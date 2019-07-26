import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * The vector in the world coordinates corresponding
 * to the provided vector in local coordinates.
 */
export interface IWorldVectorOf {
    /**
     * Local vector - Specifies whether the vector
     * should receive a rotation and a translation
     * (usually applied to positions) or only a
     * rotation (usually applied to directions
     * and velocities). Can select rotation or
     * rotation and translation.
     */
    localVector: ValueVectorType

    /**
     * Local vector - The vector in local coordinates
     * that will be converted to world coordinates.
     * Can use most Vector based Value Syntax to
     * provide this value.
     */
    relativePlayer: ValuePlayerType

    /**
     * Relative Player - The player to whom the
     * local vector is relative. Can use most Player
     * based Value Syntax to provide this value.
     */
    transformation: ValueTransformationType
}