/**
 * Enables or disables the ultimate ability
 * of one or more players.
 */
export const setUltimateAbilityEnabled = (
	/**
	 * Player - The player or players whose ultimate
	 * charge will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Enabled - Specifies whether the player or
	 * players are able to use their ultimate ability.
	 * Expects a Boolean Value such as True, False,
	 * or Compare. Can use most Boolean based Value Syntax.
	 * - `Type.Bool.`
	 */
	enabled: string | number | any[]
) => {

	return `Set Ultimate Ability Enabled(${player}, ${enabled})`
}