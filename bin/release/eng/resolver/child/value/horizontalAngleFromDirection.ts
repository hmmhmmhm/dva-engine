/**
 * The horizontal angle in degrees corresponding
 * to the specified direction vector.
 */
export const horizontalAngleFromDirection = (
	/**
	 * Direction - The direction vector from which
	 * to acquire a horizontal angle in degrees.
	 * The vector is unitized before calculation
	 * begins. Can use most Vector based Value
	 * Syntax to retrieve this value.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Angle From Direction(${direction})`
}

