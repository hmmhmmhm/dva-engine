import { ValueType, ValueNumberType, ValueVariableOperationType, VariableType } from '../../../type'

/**
 * {53}
 */
export interface IModifyGlobalVariableAtIndex {
    /**
     * {197}
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