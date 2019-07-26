/**
 * Whether a player is on a wall (climbing or riding).
 */
export const isOnWall = (
	/**
	 * Player - The player whose wall status to
	 * check. Can use most player based Value Syntax
	 * to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is On Wall(${player})`
}