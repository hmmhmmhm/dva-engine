/**
 * Whether a player is crouching.
 */
export const isCrouching = (
	/**
	 * Player - The player whose crouching status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Crouching(${player})`
}