import {
    ValuePlayerType,
    VariableType,
    ValueNumberType,
    ValueType
} from '../../../type'

/**
 * {84}
 */
export interface ISetPlayerVariableAtIndex {
    /**
     * {255}
     */
    player: ValuePlayerType
    /**
     * {256}
     */
    variable: VariableType
    /**
     * {201}
     */
    index: ValueNumberType
    /**
     * {257}
     */
    value: ValueType
}