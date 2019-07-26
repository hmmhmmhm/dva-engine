import {
    ValuePlayerType,
    VariableType,
    ValueDestinationParamType,
    ValueNumberType,
    ValueReevaluationType,
} from '../../../type'

/**
 * {9}
 */
export interface IChasePlayerVariableAtRate {
    /**
     * {142}
     */
    player: ValuePlayerType
    /**
     * {143}
     */
    variable: VariableType
    /**
     * {144}
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