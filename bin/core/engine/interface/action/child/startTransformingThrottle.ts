import {
    ValuePlayerType,
    ValueNumberType,
    ValueVectorType,
} from '../../../type'

/**
 * {717}
 */
export interface IStartTransformingThrottle {
    /**
     * {718}
     */
    player: ValuePlayerType
    /**
     * {719}
     */
    xAxisScalar: ValueNumberType
    /**
     * {720}
     */
    yAxisScalar: ValueNumberType
    /**
     * {721}
     */
    relativeDirection: ValueVectorType
}