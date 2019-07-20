import {
    ValuePlayerType,
    ValueNumberType,
    ValueStringType,
    ValueVectorType,
    ValueInWorldTextReevaluationType,
    ValueClippingType,
} from '../../../type'

/**
 * {14}
 */
export interface ICreateInWorldText {
    /**
     * {169}
     */
    visibleTo: ValuePlayerType
    /**
     * {170}
     */
    header: ValueStringType
    /**
     * {171}
     */
    position: ValueVectorType
    /**
     * {172}
     */
    scale: ValueNumberType
    /**
     * {173}
     */
    clipping: ValueClippingType
    /**
     * {174}
     */
    reevaluation: ValueInWorldTextReevaluationType
}