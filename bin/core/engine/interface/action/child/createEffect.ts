import {
    ValuePlayerType,
    ValueEffectType,
    ValueColorType,
    ValueVectorType,
    ValueNumberType,
    ValueEffectReevaluationType,
} from '../../../type'

/**
 * {13}
 */
export interface ICreateEffect {
    /**
     * {150}
     */
    visibleTo: ValuePlayerType
    /**
     * {151}
     */
    type: ValueEffectType
    /**
     * {152}
     */
    color: ValueColorType
    /**
     * {153}
     */
    position: ValueVectorType
    /**
     * {154}
     */
    radius: ValueNumberType
    /**
     * {140}
     */
    reevaluation: ValueEffectReevaluationType
}