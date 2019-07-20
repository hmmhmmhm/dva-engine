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
     * {285}
     */
    player: ValuePlayerType
    /**
     * {286}
     */
    eyePosition: ValueVectorType
    /**
     * {287}
     */
    lookAtPosition: ValueVectorType
    /**
     * {288}
     */
    blendSpeed: ValueNumberType
}