/**
 * The current ultimate ability charge percentage of a player.
 */
export const ultimateChargePercent = (
	/**
	 * Player - The player whose ultimate charge
	 * percentage to acquire. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Ultimate Charge Percent(${player})`
}

