/**
 * The Current Hero of a Player.
 */
export const heroOf = (
	/**
	 * Player - The player whose hero to acquire.
	 * Can use most player based Value Syntax to
	 * retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Hero Of(${player})`
}