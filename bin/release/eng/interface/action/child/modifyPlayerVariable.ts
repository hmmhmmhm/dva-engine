import {
    ValueType,
    ValuePlayerType,
    ValueVariableOperation
} from '../../../type'

import { IPlayerVariable } from '../../value'

/**
 * Modifies the value of a player variable,
 * which is a variable that belongs to a specific player.
 */
export interface IModifyPlayerVariable {
    /**
     * Variable - Variable specified by a single
     * alphabetic letter (A through Z).
     */
    player: ValuePlayerType
    /**
     * Operation - The way in which the variable’s
     * value will be changed. Options include standard
     * arithmetic operations as well as array operations
     * for appending and removing values.
     */
    variable: IPlayerVariable
    /**
     * Variable - Variable specified by a single
     * alphabetic letter (A through Z).
     */
    operation: ValueVariableOperation
    /**
     * Value - The value used for the modification.
     * For arithmetic operations, this is the second
     * of two operands, with the other being the
     * variable’s existing value. For array operations,
     * this is the value to append or remove. Various
     * Value Syntax can be used.
     */
    value: ValueType
}