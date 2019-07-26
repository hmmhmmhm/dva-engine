/**
 * Whether a player is dead.
 */
export const isDead = (
	/**
	 * Player - The player whose death to check.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Dead(${player})`
}