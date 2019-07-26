/**
 * The number of eliminations a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
export const numberOfEliminations = (
	/**
	 * Player - The player whose elimination count
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Eliminations(${player})`
}

