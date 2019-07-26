/**
 * The directional angle in degrees of a player’s
 * current facing relative to the world. This
 * value increases as the player rotates to
 * the left (wrapping around at +/- 180).
 */
export const horizontalFacingAngleOf = (
	/**
	 * Player - The player whose facing direction
	 * to acquire. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Facing Angle Of(${player})`
}

