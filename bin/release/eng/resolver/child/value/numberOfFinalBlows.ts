/**
 * The number of final blows a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
export const numberOfFinalBlows = (
	/**
	 * Player - The player whose final blow count
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Final Blows(${player})`
}

