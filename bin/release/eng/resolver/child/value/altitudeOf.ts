/**
 * The player’s current height in meters above
 * a surface. Results in a 0 whenever the place
 * is on a surface.
 */
export const altitudeOf = (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Altitude Of(${player})`
}

