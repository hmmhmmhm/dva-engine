import { ValueNumberType } from '../../../type'

/**
 * Skips execution of a certain number of actions
 * in the action list.
 */
export interface ISkip {
    /**
     * Condition - Specifies whether the loop will
     * occur. Can use most Conditional based Value
     * Syntax for this value.
     */
    numberOfActions: ValueNumberType
}