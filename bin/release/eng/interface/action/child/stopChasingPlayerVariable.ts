import {
    ValuePlayerType,
    VariableType,
} from '../../../type'

/**
 * Stops an in-progress chase of a player variable,
 * leaving it at its current value.
 */
export interface IStopChasingPlayerVariable {
    /**
     * Player - The player whose variable will
     * stop changing. If multiple players are provided,
     * each of their variables will stop changing.
     * Can use most Player based Value Syntax.
     */
    player: ValuePlayerType
    /**
     * Variable - Specifies which player variable
     * to stop modifying. Specified by a single
     * alphabetic letter (A through Z).
     */
    variable: VariableType
}