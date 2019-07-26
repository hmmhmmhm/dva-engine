/**
 * The value found at a specific element of
 * an array. Results in a 0 if the element does not exist.
 */
export const valueInArray = (
	/**
	 * Array - The array whose element to acquire.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * Index - The index whose element to acquire.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.`
	 */
	index: string | number | any[]
) => {

	return `Value In Array(${array}, ${index})`
}