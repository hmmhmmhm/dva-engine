/**
 * Whether a location is within view of a player.
 */
export const isInViewAngle = (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Location - The location to test if it’s
	 * within view. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	location: string | number | any[],
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.`
	 */
	viewAngle: string | number | any[]
) => {

	return `Is In View Angle(${player}, ${location}, ${viewAngle})`
}