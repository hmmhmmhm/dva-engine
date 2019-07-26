/**
 * The current speed of a player in a specific
 * direction in meters per second.
 */
export const speedOfInDirection = (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Direction - The direction of travel in which
	 * to measure the player’s speed. Can use most
	 * Vector based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[]
): number => {

	// @ts-ignore
	return `Speed Of In Direction(${player}, ${direction})`
}

