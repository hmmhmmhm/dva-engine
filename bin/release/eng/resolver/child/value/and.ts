/**
 * Whether both of the two inputs are true
 * or equivalent to true.
 */
export const and = (
	/**
	 * Value - You can specify any Value Syntax
	 * to define both of the required values.
	 * - `Type.Value.`
	 */
	value1: string | number | any[],
	/**
	 * Value - One of the two inputs considered.
	 * if both are true (or equivalent to true),
	 * then the and value is true.
	 * - `Type.Value.`
	 */
	value2: string | number | any[]
) => {

	return `And(${value1}, ${value2})`
}