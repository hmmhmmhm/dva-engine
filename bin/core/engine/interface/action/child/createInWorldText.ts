import {
    ValuePlayerType,
    ValueNumberType,
    ValueStringType,
    ValueVectorType,
    ValueInWorldTextReevaluationType,
    ValueClippingType,
} from '../../../type'

/**
 * {16}
 */
export interface ICreateInWorldText {
    /**
     * {168}
     */
    visibleTo: ValuePlayerType
    /**
     * {169}
     */
    header: ValueStringType
    /**
     * {170}
     */
    position: ValueVectorType
    /**
     * {171}
     */
    scale: ValueNumberType
    /**
     * {172}
     */
    clipping: ValueClippingType
    /**
     * {173}
     */
    reevaluation: ValueInWorldTextReevaluationType
}