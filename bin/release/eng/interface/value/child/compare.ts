import { ValueType, ValueOperatorType } from '../../../type'

/**
 * Whether the comparison of the two inputs is true.
 */
export interface ICompare {
    /**
     * Value - The left hand side of the comparison.
     * This may be any value type if the operation
     * is == or =!, otherwise real numbers are
     * expected. Can use most Value Syntax for the comparison.
     */
    value1: ValueType

    operator: ValueOperatorType

    /**
     * Condition - One of the standard conditions
     * to use for comparison. See the Condition
     * section for details.
     */
    value2: ValueType
}