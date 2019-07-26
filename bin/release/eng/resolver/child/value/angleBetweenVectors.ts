/**
 * The angle in degrees between two directional
 * vectors (no normalization required).
 */
export const angleBetweenVectors = (
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.`
	 */
	vector1: string | number | any[],
	/**
	 * Vector - One of two directional vectors
	 * between which to measure the angle in degrees.
	 * this vector does not need to be pre-normalized.
	 * - `Type.Vector.`
	 */
	vector2: string | number | any[]
): number => {

	// @ts-ignore
	return `Angle Between Vectors(${vector1}, ${vector2})`
}

