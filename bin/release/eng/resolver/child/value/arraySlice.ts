/**
 * A copy of the specified array containing
 * only values from a specified index range.
 */
export const arraySlice = (
	/**
	 * Array - You must specify the Array Syntax
	 * you are comparing the value to.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * Start Index - The first index of the range.
	 * Can use most Value Syntax to specify with.
	 * - `Type.Number.`
	 */
	index: string | number | any[],
	/**
	 * Count - The number of elements in the resulting
	 * array. The resulting array will contain
	 * fewer elements if the specified range exceeds
	 * the bounds of the array. Can use any Number-based
	 * Value Syntax to specify with.
	 * - `Type.Number.`
	 */
	count: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Array Slice(${array}, ${index}, ${count})`
}

