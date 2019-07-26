/**
 * Whether the specified player’s primary weapon
 * attack is being used.
 */
export const isFiringPrimary = (
	/**
	 * Player - The player whose primary weapon
	 * attack to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Firing Primary(${player})`
}