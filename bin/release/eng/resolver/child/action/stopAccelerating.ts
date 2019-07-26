/**
 * Stops the acceleration started by the start
 * accelerating action for one or more players.
 */
export const stopAccelerating = (
	/**
	 * Player - The player or players who will
	 * stop accelerating. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Accelerating(${player})`
}