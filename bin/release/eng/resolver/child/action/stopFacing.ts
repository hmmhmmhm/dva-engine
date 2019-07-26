/**
 * Stops the turning started by the start facing
 * action for or one or more players.
 */
export const stopFacing = (
	/**
	 * Player - The player or players who will
	 * stop turning. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Facing(${player})`
}