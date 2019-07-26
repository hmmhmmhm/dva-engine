/**
 * The vertical angle in degrees, of a player’s
 * current facing relative to the world. This
 * value increases as the player looks down.
 */
export const verticalFacingAngleOf = (
	/**
	 * Player - The player whose vertical facing
	 * angle to acquire. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Facing Angle Of(${player})`
}

