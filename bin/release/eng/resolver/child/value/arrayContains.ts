/**
 * Whether the specified array contains the
 * specified value.
 */
export const arrayContains = (
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
) => {

	return `Array Contains(${array}, ${value})`
}