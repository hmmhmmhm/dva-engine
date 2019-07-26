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
     * {149}
     */
    visibleTo: ValuePlayerType
    /**
     * {150}
     */
    type: ValueEffectType
    /**
     * {151}
     */
    color: ValueColorType
    /**
     * {152}
     */
    position: ValueVectorType
    /**
     * {153}
     */
    radius: ValueNumberType
    /**
     * {139}
     */
    reevaluation: ValueEffectReevaluationType
}