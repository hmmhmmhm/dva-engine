/**
 * A random value from the specified array.
 */
export const randomValueInArray = (
	/**
	 * Array - The array from which to randomly
	 * take a value. If a non-array value is provided,
	 * the result is simply the provided value.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Value.`
	 */
	array: string | number | any[]
) => {

	return `Random Value In Array(${array})`
}