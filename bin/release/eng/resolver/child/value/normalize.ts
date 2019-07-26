/**
 * The unit-length normalization of a vector.
 */
export const normalize = (
	/**
	 * Vector - The vector to normalize. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.`
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Normalize(${position})`
}

