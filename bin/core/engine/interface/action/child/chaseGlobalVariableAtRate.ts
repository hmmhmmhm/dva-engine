import {
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * {7}
 */
export interface IChaseGlobalVariableAtRate {
    /**
     * {137}
     */
    variable: VariableType
    /**
     * {138}
     */
    destination: ValueDestinationParamType
    /**
     * {139}
     */
    rate: ValueNumberType
    /**
     * {140}
     */
    reevaluation: ValueReevaluationType
}