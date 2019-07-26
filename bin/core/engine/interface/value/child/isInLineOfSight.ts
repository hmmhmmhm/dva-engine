import {
    ValueVectorType,
    ValueBarrierType,
} from '../../../type'

/**
 * {426}
 */
export interface IIsInLineOfSight {
    /**
     * {606}
     */
    startPos: ValueVectorType
    /**
     * {607}
     */
    endPos: ValueVectorType
    /**
     * {608}
     */
    barriers: ValueBarrierType
}