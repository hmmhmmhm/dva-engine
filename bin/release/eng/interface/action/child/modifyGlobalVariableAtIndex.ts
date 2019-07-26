import { ValueType, ValueNumberType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * Modifies the value of a global variable
 * at an index, which is a variable that belongs
 * to the game itself.
 */
export interface IModifyGlobalVariableAtIndex {
    /**
     * Variable - Variable specified by a single
     * alphabetic letter (A through Z).
     */
    variable: IGlobalVariable
    /**
     * Player - The player or players whose variable
     * will be set. If multiple players are provided,
     * each of their variables will be set. Can
     * use most Player based Value Syntax for this value.
     */
    index: ValueNumberType
    /**
     * Variable - Variable specified by a single
     * alphabetic letter (A through Z).
     */
    operation: ValueVariableOperation
    /**
     * Index - The index of the array to modify.
     * If the index is beyond the end of the array,
     * the array is extended with new elements
     * given a value of 0.
     */
    value: ValueType
}