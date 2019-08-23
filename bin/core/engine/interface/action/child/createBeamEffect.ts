import { ValuePlayerType, ValueBeamType, ValueVectorType, ValueColorType, ValueBeamReevaluationType } from '../../../type'

/**
 * {747}
 */
export interface ICreateBeamEffect {
    /**
     * {748}
     */
    visibleTo: ValuePlayerType
    /**
     * {749}
     */
    beamType: ValueBeamType
    /**
     * {750}
     */
    startPosition: ValueVectorType
    /**
     * {751}
     */
    endPosition: ValueVectorType
    /**
     * {752}
     */
    color: ValueColorType
    /**
     * {753}
     */
    reevaluation: ValueBeamReevaluationType
}