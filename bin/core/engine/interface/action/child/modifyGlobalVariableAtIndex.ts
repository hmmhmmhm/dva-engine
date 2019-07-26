import { ValueType, ValueNumberType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * {53}
 */
export interface IModifyGlobalVariableAtIndex {
    /**
     * {197}
     */
    variable: IGlobalVariable
    /**
     * {200}
     */
    index: ValueNumberType
    /**
     * {198}
     */
    operation: ValueVariableOperation
    /**
     * {199}
     */
    value: ValueType
}