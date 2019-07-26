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
     * {149}
     */
    visibleTo: ValuePlayersParamType
    /**
     * {209}
     */
    type: ValuePlayEffect
    /**
     * {210}
     */
    color: ValueColorType
    /**
     * {211}
     */
    position: ValueVectorType
    /**
     * {212}
     */
    radius: ValueNumberType
}