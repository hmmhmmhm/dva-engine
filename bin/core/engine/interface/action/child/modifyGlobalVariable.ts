import { ValueType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * {52}
 */
export interface IModifyGlobalVariable {
    /**
     * {198}
     */
    variable: IGlobalVariable
    /**
     * {199}
     */
    operation: ValueVariableOperation
    /**
     * {200}
     */
    value: ValueType
}