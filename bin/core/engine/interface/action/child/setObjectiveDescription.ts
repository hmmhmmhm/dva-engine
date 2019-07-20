import { ValuePlayerType, ValueStringType, ValueObjectiveDescriptionReevaluationType } from '../../../type'

/**
 * {80}
 */
export interface ISetObjectiveDescription {
    /**
     * {247}
     */
    visibleTo: ValuePlayerType
    /**
     * {136}
     */
    header: ValueStringType
    /**
     * {248}
     */
    reevaluation: ValueObjectiveDescriptionReevaluationType
}