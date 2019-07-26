/**
 * The number of deaths a specific player has
 * earned. This value only accumulates while
 * a game is in progress.
 */
export const numberOfDeaths = (
	/**
	 * Player - The player whose death count to
	 * acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Deaths(${player})`
}

