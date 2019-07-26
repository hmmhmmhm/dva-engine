/**
 * Whether the specified player is using an
 * ultimate ability.
 */
export const isUsingUltimate = (
	/**
	 * Player - The player whose ultimate ability
	 * usage to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Using Ultimate(${player})`
}