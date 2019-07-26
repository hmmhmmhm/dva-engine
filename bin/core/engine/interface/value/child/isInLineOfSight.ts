import {
    ValueVectorType,
    ValueBarrierType,
} from '../../../type'

/**
 * {425}
 */
export interface IIsInLineOfSight {
    /**
     * {605}
     */
    startPos: ValueVectorType
    /**
     * {606}
     */
    endPos: ValueVectorType
    /**
     * {607}
     */
    barriers: ValueBarrierType
}