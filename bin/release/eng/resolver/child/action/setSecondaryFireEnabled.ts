/**
 * Enables or disables secondary fire for one
 * or more players.
 */
export const setSecondaryFireEnabled = (
	/**
	 * Player - The player or players whose access
	 * to secondary fire is affected. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use secondary fire.
	 * Expects a Boolean Value such as True, False,
	 * or Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Secondary Fire Enabled(${player}, ${enabled})`
}