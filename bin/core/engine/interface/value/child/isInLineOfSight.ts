import {
    ValueVectorType,
    ValueBarrierType,
} from '../../../type'

/**
 * {427}
 */
export interface IIsInLineOfSight {
    /**
     * {608}
     */
    startPos: ValueVectorType
    /**
     * {609}
     */
    endPos: ValueVectorType
    /**
     * {610}
     */
    barriers: ValueBarrierType
}