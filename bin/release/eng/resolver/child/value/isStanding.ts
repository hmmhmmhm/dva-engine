/**
 * Whether a player is standing (defined as
 * both not moving and not in the air).
 */
export const isStanding = (
	/**
	 * Player - The player whose standing status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Standing(${player})`
}