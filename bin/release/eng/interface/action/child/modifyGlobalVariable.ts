import { ValueType, ValueVariableOperation } from '../../../type'
import { IGlobalVariable } from '../../value'

/**
 * Modifies the value of a global variable,
 * which is a variable that belongs to the game itself.
 */
export interface IModifyGlobalVariable {
    /**
     * Variable - Variable specified by a single
     * alphabetic letter (A through Z).
     */
    variable: IGlobalVariable
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