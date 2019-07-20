import { ValueType, ValueNumberType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * {53}
 */
export interface IModifyGlobalVariableAtIndex {
    /**
     * {198}
     */
    variable: IGlobalVariable
    /**
     * {201}
     */
    index: ValueNumberType
    /**
     * {199}
     */
    operation: ValueVariableOperation
    /**
     * {200}
     */
    value: ValueType
}