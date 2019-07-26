/**
 * A copy of the specified array with any values
 * that do not match the specified condition removed.
 */
export const filteredArray = (
	/**
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * - `Type.Bool.`
	 */
	condition: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Filtered Array(${array}, ${condition})`
}

