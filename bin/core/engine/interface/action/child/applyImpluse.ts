import { ValuePlayerType, ValueVectorType, ValueNumberType, ValueRelativeType, ValueMotionType } from '../../../type'

/**
 * {5}
 */
export interface IApplyImpluse {
    /**
     * {130}
     */
    player: ValuePlayerType
    /**
     * {131}
     */
    direction: ValueVectorType
    /**
     * {132}
     */
    speed: ValueNumberType
    /**
     * {133}
     */
    relative: ValueRelativeType
    /**
     * {134}
     */
    motion: ValueMotionType
}