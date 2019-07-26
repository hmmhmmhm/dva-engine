/**
 * A copy of an array with one or more values
 * appended to the end.
 */
export const appendToArray = (
	/**
	 * Array - You must specify the Array Syntax
	 * you are adding the value to.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * Value - You must specify the Value Syntax
	 * that you are adding to the array.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Append To Array(${array}, ${value})`
}