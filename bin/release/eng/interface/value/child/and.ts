import { ValueType } from '../../../type/value'

/**
 * Whether both of the two inputs are true
 * or equivalent to true.
 */
export interface IAnd {
    /**
     * Value - You can specify any Value Syntax
     * to define both of the required values.
     */
    value1: ValueType

    /**
     * Value - One of the two inputs considered.
     * if both are true (or equivalent to true),
     * then the and value is true.
     */
    value2: ValueType
}