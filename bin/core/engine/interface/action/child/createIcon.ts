import {
    ValuePlayerType,
    ValueVectorType,
    ValueIconReevaluationType,
    ValueIconType,
    ValueColorType,
    ValueBoolType,
} from '../../../type'

/**
 * {15}
 */
export interface ICreateIcon {
    /**
     * {164}
     */
    visibleTo: ValuePlayerType

    /**
     * {165}
     */
    position: ValueVectorType

    /**
     * {166}
     */
    icon: ValueIconType

    /**
     * {140}
     */
    reevaluation: ValueIconReevaluationType

    /**
     * {167}
     */
    iconColor: ValueColorType

    /**
     * {168}
     */
    showWhenOffscreen: ValueBoolType
}