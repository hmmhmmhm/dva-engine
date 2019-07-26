import { VariableType } from '../../../type'

/**
 * Stops an in-progress chase of a global variable,
 * leaving it at its current value.
 */
export interface IStopChasingGlobalVariable {
    /**
     * Variable - Specifies which global variable
     * to stop modifying. Specified by a single
     * alphabetic letter (A through Z).
     */
    variable: VariableType
}