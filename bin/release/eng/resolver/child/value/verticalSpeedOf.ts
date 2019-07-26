/**
 * The current vertical speed of a player in
 * meters per second. This measurement excludes
 * all horizontal motion, including motion
 * while traveling up and down slopes.
 */
export const verticalSpeedOf = (
	/**
	 * Player - The player whose vertical speed
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Speed Of(${player})`
}

