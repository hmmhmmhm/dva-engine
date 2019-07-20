import {
    ValuePlayerType,
    ValueVectorType,
    ValueNumberType,
    ValueRelativeType,
    ValueStartAcceleratingReevaluationType
} from '../../../type'

/**
 * {98}
 */
export interface IStartAccelerating {
    /**
     * {279}
     */
    player: ValuePlayerType
    /**
     * {280}
     */
    direction: ValueVectorType
    /**
     * {281}
     */
    rate: ValueNumberType
    /**
     * {282}
     */
    maxSpeed: ValueNumberType
    /**
     * {283}
     */
    relative: ValueRelativeType
    /**
     * {284}
     */
    reevaluation: ValueStartAcceleratingReevaluationType
}