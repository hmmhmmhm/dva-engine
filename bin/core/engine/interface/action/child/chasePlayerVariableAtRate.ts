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
     * {141}
     */
    player: ValuePlayerType
    /**
     * {142}
     */
    variable: VariableType
    /**
     * {143}
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