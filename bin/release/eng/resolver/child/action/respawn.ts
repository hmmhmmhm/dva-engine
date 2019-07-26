/**
 * Respawns one or more players at an appropriate
 * spawn location with full health, even if
 * they were already alive.
 */
export const respawn = (
	/**
	 * Player - The player or players to respawn.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Respawn(${player})`
}