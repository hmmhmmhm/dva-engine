/**
 * Whether the specified player’s secondary
 * weapon attack is being used.
 */
export const isFiringSecondary = (
	/**
	 * Player - The player whose secondary weapon
	 * attack to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Firing Secondary(${player})`
}