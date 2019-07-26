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
     * {163}
     */
    visibleTo: ValuePlayerType

    /**
     * {164}
     */
    position: ValueVectorType

    /**
     * {165}
     */
    icon: ValueIconType

    /**
     * {139}
     */
    reevaluation: ValueIconReevaluationType

    /**
     * {166}
     */
    iconColor: ValueColorType

    /**
     * {167}
     */
    showWhenOffscreen: ValueBoolType
}