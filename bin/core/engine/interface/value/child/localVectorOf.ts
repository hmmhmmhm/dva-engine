import {
    ValueVectorType,
    ValuePlayerType,
    ValueTransformationType
} from '../../../type'

/**
 * {454}
 */
export interface ILocalVectorOf {
    /**
     * {628}
     */
    worldVector: ValueVectorType

    /**
     * {629}
     */
    relativePlayer: ValuePlayerType

    /**
     * {630}
     */
    transformation: ValueTransformationType
}