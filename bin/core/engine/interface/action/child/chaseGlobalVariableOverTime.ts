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
     * {136}
     */
    variable: VariableType
    /**
     * {137}
     */
    destination: ValueDestinationParamType
    /**
     * {140}
     */
    duration: ValueNumberType
    /**
     * {139}
     */
    reevaluation: ValueReevaluationType
}