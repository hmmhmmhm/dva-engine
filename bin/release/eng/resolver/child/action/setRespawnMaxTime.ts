/**
 * Sets the duration between death and respawn
 * for one or more players that are already
 * dead when this action is executed, the change
 * takes effect on their next death.
 */
export const setRespawnMaxTime = (
	/**
	 * Player - The player or players whose respawn
	 * max time will is being defined. Can use
	 * most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Time - The duration between death and respawn
	 * in seconds. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	time: string | number | any[]
) => {

	return `Set Respawn Max Time(${player}, ${time})`
}