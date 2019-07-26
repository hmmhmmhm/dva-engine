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
     * {254}
     */
    player: ValuePlayerType
    /**
     * {255}
     */
    variable: VariableType
    /**
     * {200}
     */
    index: ValueNumberType
    /**
     * {256}
     */
    value: ValueType
}