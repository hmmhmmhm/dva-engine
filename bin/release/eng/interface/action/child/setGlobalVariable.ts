import {
    ValueType,
    VariableType
} from '../../../type'

/**
 * Stores a value into a global variable, which
 * a variable that belongs to the game itself.
 */
export interface ISetGlobalVariable {
    /**
     * Variable - Specifies which Global Variable
     * to store the value into. Specified by a
     * single alphabetic letter (A through Z).
     */
    variable: VariableType
    /**
     * Player - The player or players whose variable
     * will be set. If multiple players are provided,
     * each of their variables will be set. Can
     * use most Player based Value Syntax for this value.
     */
    value: ValueType
}