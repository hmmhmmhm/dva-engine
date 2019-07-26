import { ValueType, ValueNumberType, ValueVariableOperation, ValuePlayerType } from '../../../type'
import { IPlayerVariable } from '../../value'

/**
 * {56}
 */
export interface IModifyPlayerVariableAtIndex {
    /**
     * {207}
     */
    player: ValuePlayerType
    /**
     * {208}
     */
    variable: IPlayerVariable
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