import {
    ValuePlayerType,
    VariableType,
    ValueType
} from '../../../type'

/**
 * {83}
 */
export interface ISetPlayerVariable {
    /**
     * {252}
     */
    player: ValuePlayerType
    /**
     * {253}
     */
    variable: VariableType
    /**
     * {233}
     */
    value: ValueType
}