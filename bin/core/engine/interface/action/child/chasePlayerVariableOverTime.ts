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
     * {141}
     */
    player: ValuePlayerType
    /**
     * {144}
     */
    variable: VariableType
    /**
     * {143}
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