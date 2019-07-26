import { ValueBoolType } from '../../../type'

/**
 * Stops execution of the action list if the
 * action’s condition evaluates to true, if
 * it does not, the execution continues with
 * the next action.
 */
export interface IAbortIf {
    /**
     * Condition - Specifies whether the execution
     * is stopped. Can use most Boolean based Value Syntax.
     */
    condition: ValueBoolType
}