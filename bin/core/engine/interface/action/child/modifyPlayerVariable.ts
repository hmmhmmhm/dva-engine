import {
    ValueType,
    ValuePlayerType,
    ValueVariableOperationType,
    VariableType
} from '../../../type'

/**
 * {55}
 */
export interface IModifyPlayerVariable {
    /**
     * {203}
     */
    player: ValuePlayerType
    /**
     * {204}
     */
    variable: VariableType
    /**
     * {198}
     */
    operation: ValueVariableOperationType
    /**
     * {205}
     */
    value: ValueType
}