/**
 * The index of a value within an array or
 * -1 if no such value can be found.
 */
export const indexOfArrayValue = (
	/**
	 * Array - The array in which to search for
	 * the specified value. Can use most Array
	 * based Value Syntax to retrieve this value.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * Value - The value for which to search. Can
	 * use most Number based Value Syntax to retrive this value.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
): number => {

	// @ts-ignore
	return `Index Of Array Value(${array}, ${value})`
}

