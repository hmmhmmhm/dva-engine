import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * {453}
 */
export interface ILocalVectorOf {
    /**
     * {626}
     */
    worldVector: ValueVectorType

    /**
     * {627}
     */
    relativePlayer: ValuePlayerType

    /**
     * {628}
     */
    transformation: ValueTransformationType
}