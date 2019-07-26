/**
 * The current position of a player as a vector.
 */
export const positionOf = (
	/**
	 * Player - The player whose position to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Position Of(${player})`
}

