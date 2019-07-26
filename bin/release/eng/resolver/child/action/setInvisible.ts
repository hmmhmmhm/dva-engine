/**
 * Causes one or more players to become invisible
 * to either all other players or just enemies.
 */
export const setInvisible = (
	/**
	 * Player - The player or players who will
	 * become invisible. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Invisible to - Specifies for whom the player
	 * or players will be invisible. Can be set
	 * to All, Enemies, or None.
	 * - `Type.InvisibleTo.`
	 */
	invisibleTo: string | number | any[]
) => {

	return `Set Invisible(${player}, ${invisibleTo})`
}