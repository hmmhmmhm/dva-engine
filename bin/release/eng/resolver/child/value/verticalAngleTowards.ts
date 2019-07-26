/**
 * The vertical angle in degrees from a player’s
 * current forward direction to the specified
 * position. The result is positive if the
 * position is below the player. Otherwise,
 * the result is zero or negative.
 */
export const verticalAngleTowards = (
	/**
	 * Position - The direction vector from which
	 * to acquire a vertical angle in degrees.
	 * The vector is unitized before calculations
	 * begins. Can use most Vector based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Position - The player whose current facing
	 * the angle begins. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Angle Towards(${player}, ${position})`
}

