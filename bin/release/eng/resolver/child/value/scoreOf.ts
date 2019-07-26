/**
 * The current score of a player. Results in
 * 0 if the game mode is not free-for-all.
 */
export const scoreOf = (
	/**
	 * Player - The player whose score to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Score Of(${player})`
}

