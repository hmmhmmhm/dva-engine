/**
 * A random real number between the specified min and max.
 */
export const randomReal = (
	/**
	 * MIN - The smallest real number allowed.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.`
	 */
	min: string | number | any[],
	/**
	 * MAX - The largest real number allowed. Can
	 * use most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	max: string | number | any[]
): number => {

	// @ts-ignore
	return `Random Real(${min}, ${max})`
}

