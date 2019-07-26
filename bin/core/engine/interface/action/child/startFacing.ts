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
     * {295}
     */
    player: ValuePlayerType
    /**
     * {296}
     */
    direction: ValueVectorType
    /**
     * {297}
     */
    turnRate: ValueNumberType
    /**
     * {298}
     */
    relative: ValueRelativeType
    /**
     * {283}
     */
    reevaluation: ValueFacingReevaluationType
}