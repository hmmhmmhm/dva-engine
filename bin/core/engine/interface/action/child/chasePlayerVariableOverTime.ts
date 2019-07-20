import {
    ValuePlayerType,
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * {10}
 */
export interface IChasePlayerVariableOverTime {
    /**
     * {142}
     */
    player: ValuePlayerType
    /**
     * {145}
     */
    variable: VariableType
    /**
     * {144}
     */
    destination: ValueDestinationParamType
    /**
     * {141}
     */
    duration: ValueNumberType
    /**
     * {140}
     */
    reevaluation: ValueReevaluationType
}