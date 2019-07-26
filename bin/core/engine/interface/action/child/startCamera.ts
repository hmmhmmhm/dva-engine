import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
} from '../../../type'

/**
 * {99}
 */
export interface IStartCamera {
    /**
     * {284}
     */
    player: ValuePlayerType
    /**
     * {285}
     */
    eyePosition: ValueVectorType
    /**
     * {286}
     */
    lookAtPosition: ValueVectorType
    /**
     * {287}
     */
    blendSpeed: ValueNumberType
}