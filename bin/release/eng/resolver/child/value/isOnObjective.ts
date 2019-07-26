/**
 * Whether a specific player is currently occupying
 * a payload or capture point.
 */
export const isOnObjective = (
	/**
	 * Player - The player whose objective status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is On Objective(${player})`
}