import { ValueType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * {52}
 */
export interface IModifyGlobalVariable {
    /**
     * {197}
     */
    variable: IGlobalVariable
    /**
     * {198}
     */
    operation: ValueVariableOperation
    /**
     * {199}
     */
    value: ValueType
}