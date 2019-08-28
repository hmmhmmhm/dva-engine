import { ValueType, ValueVariableOperationType, VariableType } from '../../../type'

/**
 * {52}
 */
export interface IModifyGlobalVariable {
    /**
     * {197}
     */
    variable: VariableType
    /**
     * {198}
     */
    operation: ValueVariableOperationType
    /**
     * {199}
     */
    value: ValueType
}