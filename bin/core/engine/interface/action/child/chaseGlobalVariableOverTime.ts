import {
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * {8}
 */
export interface IChaseGlobalVariableOverTime {
    /**
     * {137}
     */
    variable: VariableType
    /**
     * {138}
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