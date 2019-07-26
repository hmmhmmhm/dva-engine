/**
 * Whether a specific player is moving (as
 * defined by having a non-zero constant speed).
 */
export const isMoving = (
	/**
	 * Player - The player whose moving status
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Moving(${player})`
}