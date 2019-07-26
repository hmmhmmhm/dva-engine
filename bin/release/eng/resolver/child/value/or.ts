/**
 * Whether either of the two inputs are true
 * (or equivalent to true).
 */
export const or = (
	/**
	 * Value - One of the two inputs considered.
	 * If either one is true (or equivalent to
	 * true), then the OR value is true. Can use
	 * most Boolean based Value Syntax to provide this value.
	 * - `Type.Value.`
	 */
	value1: string | number | any[],
	/**
	 * Value - One of the two inputs considered.
	 * If either one is true (or equivalent to
	 * true), then the OR value is true. Can use
	 * most Boolean based Value Syntax to provide this value.
	 * - `Type.Value.`
	 */
	value2: string | number | any[]
) => {

	return `Or(${value1}, ${value2})`
}