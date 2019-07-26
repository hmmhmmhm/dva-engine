/**
 * Whether the comparison of the two inputs is true.
 */
export const compare = (
	/**
	 * Value - The left hand side of the comparison.
	 * This may be any value type if the operation
	 * is == or =!, otherwise real numbers are
	 * expected. Can use most Value Syntax for the comparison.
	 * - `Type.Value.`
	 */
	value1: string | number | any[],
	/**
	 * - `Type.Operator.`
	 */
	operator: string | number | any[],
	/**
	 * Condition - One of the standard conditions
	 * to use for comparison. See the Condition
	 * section for details.
	 * - `Type.Value.`
	 */
	value2: string | number | any[]
) => {

	return `Compare(${value1}, ${operator}, ${value2})`
}