/**
 * Stops all heal over time started by the
 * start heal over time or one or more players.
 */
export const stopAllHealOverTime = (
	/**
	 * Player - The player or players whose scripted
	 * heal over time will stop. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop All Heal Over Time(${player})`
}