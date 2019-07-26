/**
 * Enables or disables primary fire for one
 * or more players.
 */
export const setPrimaryFireEnabled = (
	/**
	 * Player - The player or players whose access
	 * to primary fire is affected. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use primary fire. Expects
	 * a Boolean Value such as True, False, or
	 * Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Primary Fire Enabled(${player}, ${enabled})`
}