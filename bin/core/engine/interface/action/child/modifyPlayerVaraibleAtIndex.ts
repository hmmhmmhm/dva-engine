import { ValueType, ValueNumberType, ValueVariableOperation, ValuePlayerType } from '../../../type'
import { IPlayerVariable } from '../../value'

/**
 * {56}
 */
export interface IModifyPlayerVaraibleAtIndex {
    /**
     * {204}
     */
    player: ValuePlayerType
    /**
     * {205}
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