import { ValueType, ValueNumberType, ValueVariableOperation, ValuePlayerType } from '../../../type'
import { IPlayerVariable } from '../../value'

/**
 * Modifies the value of a player variable
 * at an index, which is a variable that belongs
 * to a specific player.
 */
export interface IModifyPlayerVariableAtIndex {
    /**
     * Operation - The way in which the variable’s
     * value will be changed. Options include standard
     * arithmetic operations as well as array operations
     * for appending and removing values.
     */
    player: ValuePlayerType
    /**
     * Value - The value used for the modification.
     * For arithmetic operations, this is the second
     * of two operands, with the other being the
     * variable’s existing value. For array operations,
     * this is the value to append or remove. Various
     * Value Syntax can be used.
     */
    variable: IPlayerVariable
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