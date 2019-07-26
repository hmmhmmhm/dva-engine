import { ValuePlayerType, ValueVectorType, ValueNumberType, ValueRelativeType, ValueMotionType } from '../../../type'

/**
 * {5}
 */
export interface IApplyImpluse {
    /**
     * {129}
     */
    player: ValuePlayerType
    /**
     * {130}
     */
    direction: ValueVectorType
    /**
     * {131}
     */
    speed: ValueNumberType
    /**
     * {132}
     */
    relative: ValueRelativeType
    /**
     * {133}
     */
    motion: ValueMotionType
}