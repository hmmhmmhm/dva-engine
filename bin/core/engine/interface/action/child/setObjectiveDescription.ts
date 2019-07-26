import { ValuePlayerType, ValueStringType, ValueObjectiveDescriptionReevaluationType } from '../../../type'

/**
 * {80}
 */
export interface ISetObjectiveDescription {
    /**
     * {246}
     */
    visibleTo: ValuePlayerType
    /**
     * {135}
     */
    header: ValueStringType
    /**
     * {247}
     */
    reevaluation: ValueObjectiveDescriptionReevaluationType
}