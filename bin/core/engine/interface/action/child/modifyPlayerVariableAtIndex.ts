import { ValueType, ValueNumberType, ValueVariableOperation, ValuePlayerType } from '../../../type'
import { IPlayerVariable } from '../../value'

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
    variable: IPlayerVariable
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