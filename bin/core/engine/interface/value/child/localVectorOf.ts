import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * {452}
 */
export interface ILocalVectorOf {
    /**
     * {625}
     */
    worldVector: ValueVectorType

    /**
     * {626}
     */
    relativePlayer: ValuePlayerType

    /**
     * {627}
     */
    transformation: ValueTransformationType
}