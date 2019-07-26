/**
 * Stops all damage over time started by the
 * start damage over time or one or more players.
 */
export const stopAllDamageOverTime = (
	/**
	 * Player - The player or players whose scripted
	 * damage over time will stop. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop All Damage Over Time(${player})`
}