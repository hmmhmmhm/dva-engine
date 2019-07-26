import { ValueType } from '../../../type'

/**
 * Whether either of the two inputs are true
 * (or equivalent to true).
 */
export interface IOr {
    /**
     * Value - One of the two inputs considered.
     * If either one is true (or equivalent to
     * true), then the OR value is true. Can use
     * most Boolean based Value Syntax to provide this value.
     */
    value1: ValueType
    /**
     * Value - One of the two inputs considered.
     * If either one is true (or equivalent to
     * true), then the OR value is true. Can use
     * most Boolean based Value Syntax to provide this value.
     */
    value2: ValueType
}