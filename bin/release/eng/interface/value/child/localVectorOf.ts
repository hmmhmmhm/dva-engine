import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * The vector in local coordinates corresponding
 * to the provided vector in world coordinates.
 */
export interface ILocalVectorOf {
    /**
     * World Vector - The vector in world coordinates
     * that will be converted to local coordinates.
     * Can use most Vector based Value Syntax to
     * provide this data.
     */
    worldVector: ValueVectorType

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