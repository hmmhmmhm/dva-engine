import { ValueType, ValueNumberType, ValueVariableOperationType, ValuePlayerType, VariableType } from '../../../type'

/**
 * {56}
 */
export interface IModifyPlayerVariableAtIndex {
    /**
     * {206}
     */
    player: ValuePlayerType
    /**
     * {207}
     */
    variable: VariableType
    /**
     * {200}
     */
    index: ValueNumberType
    /**
     * {198}
     */
    operation: ValueVariableOperationType
    /**
     * {199}
     */
    value: ValueType
}