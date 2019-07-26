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
     * {136}
     */
    variable: VariableType
    /**
     * {137}
     */
    destination: ValueDestinationParamType
    /**
     * {138}
     */
    rate: ValueNumberType
    /**
     * {139}
     */
    reevaluation: ValueReevaluationType
}