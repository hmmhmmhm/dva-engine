import {
    ValuePlayersParamType,
    ValuePlayEffect,
    ValueColorType,
    ValueVectorType,
    ValueNumberType,
} from '../../../type'

/**
 * {59}
 */
export interface IPlayEffect {
    /**
     * {150}
     */
    visibleTo: ValuePlayersParamType
    /**
     * {210}
     */
    type: ValuePlayEffect
    /**
     * {211}
     */
    color: ValueColorType
    /**
     * {212}
     */
    position: ValueVectorType
    /**
     * {213}
     */
    radius: ValueNumberType
}