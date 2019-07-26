/**
 * Whether a player is on the ground (or other
 * walkable surface).
 */
export const isOnGround = (
	/**
	 * Player - The player whose ground status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is On Ground(${player})`
}