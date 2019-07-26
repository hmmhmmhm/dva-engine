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
     * {278}
     */
    player: ValuePlayerType
    /**
     * {279}
     */
    direction: ValueVectorType
    /**
     * {280}
     */
    rate: ValueNumberType
    /**
     * {281}
     */
    maxSpeed: ValueNumberType
    /**
     * {282}
     */
    relative: ValueRelativeType
    /**
     * {283}
     */
    reevaluation: ValueStartAcceleratingReevaluationType
}