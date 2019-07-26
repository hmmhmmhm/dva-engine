/**
 * A random integer between the specified min
 * and max, inclusive.
 */
export const randomInteger = (
	/**
	 * MIN - The smallest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	min: string | number | any[],
	/**
	 * MAX - The largest integer allowed. If a
	 * real number is provided to this input, it
	 * is rounded to the nearest integer. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	max: string | number | any[]
): number => {

	// @ts-ignore
	return `Random Integer(${min}, ${max})`
}

