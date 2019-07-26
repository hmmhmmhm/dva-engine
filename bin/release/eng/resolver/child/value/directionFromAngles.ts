/**
 * The unit-length direction vector corresponding
 * to the specified angles.
 */
export const directionFromAngles = (
	/**
	 * Horizontal Angle - The horizontal angle
	 * in degrees used to construct the resulting
	 * vector. Most angle based Value Syntax can be used here.
	 * - `Type.Number.`
	 */
	horizontalAngle: string | number | any[],
	/**
	 * Vertical Angle - The vertical angle in degrees
	 * used to construct the resulting vector.
	 * Most angle based Value Syntax can be used here.
	 * - `Type.Number.`
	 */
	verticalAngle: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction From Angles(${horizontalAngle}, ${verticalAngle})`
}

