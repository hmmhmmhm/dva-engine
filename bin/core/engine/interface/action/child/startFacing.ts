import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
    ValueRelativeType,
    ValueFacingReevaluationType
} from '../../../type'

/**
 * {102}
 */
export interface IStartFacing {
    /**
     * {296}
     */
    player: ValuePlayerType
    /**
     * {297}
     */
    direction: ValueVectorType
    /**
     * {298}
     */
    turnRate: ValueNumberType
    /**
     * {299}
     */
    relative: ValueRelativeType
    /**
     * {284}
     */
    reevaluation: ValueFacingReevaluationType
}