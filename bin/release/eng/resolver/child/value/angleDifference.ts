/**
 * The difference between two angles, after
 * the angles are wrapped within +/- 180 of
 * each other, the result is positive if the
 * second angle is greater than the first angle,
 * otherwise the result is zero or negative.
 */
export const angleDifference = (
	/**
	 * Angle - You can specify any Angle Syntax
	 * to define both of the required values.
	 * - `Type.Number.`
	 */
	angle1: string | number | any[],
	/**
	 * Angle - One of the two angles between which
	 * to measure the resulting angle.
	 * - `Type.Number.`
	 */
	angle2: string | number | any[]
): number => {

	// @ts-ignore
	return `Angle Difference(${angle1}, ${angle2})`
}

