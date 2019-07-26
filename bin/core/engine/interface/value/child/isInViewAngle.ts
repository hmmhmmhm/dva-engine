import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType
} from '../../../type'

/**
 * {429}
 */
export interface IIsInViewAngle {
    /**
     * {610}
     */
    player: ValuePlayerType
    /**
     * {611}
     */
    location: ValueVectorType
    /**
     * {612}
     */
    viewAngle: ValueNumberType
}