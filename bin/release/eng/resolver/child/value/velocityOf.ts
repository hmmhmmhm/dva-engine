/**
 * The current velocity of a player as a vector.
 * If the player is on a surface, the Y component
 * of this velocity will be 0m even when traveling
 * up or down a slope.
 */
export const velocityOf = (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Velocity Of(${player})`
}

