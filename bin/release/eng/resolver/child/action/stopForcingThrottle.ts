/**
 * Undoes the effect of start forcing throttle
 * action for one or more players
 */
export const stopForcingThrottle = (
	/**
	 * Player - The player or players whose movement
	 * inout will be restored. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Forcing Throttle(${player})`
}