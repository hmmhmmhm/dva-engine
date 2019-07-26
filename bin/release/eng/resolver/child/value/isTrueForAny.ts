/**
 * Whether the specified condition evaluates
 * to true for any value in the specified array.
 */
export const isTrueForAny = (
	/**
	 * Array - The array whose values will be considered.
	 * Can use most Array Based Value Syntax to
	 * retrieve this value.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * Condition - The condition that is evaluated
	 * for each element of the specified array,
	 * Use the current array element value to reference
	 * the element of the array currently being
	 * considered. Can use most Comparative based
	 * Value Syntax to retrieve this value.
	 * - `Type.Bool.`
	 */
	condition: string | number | any[]
) => {

	return `Is True For Any(${array}, ${condition})`
}