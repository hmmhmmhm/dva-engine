/**
 * The max health of a player, including armor and shields.
 */
export const maxHealth = (
	/**
	 * Player - The player whose max health to
	 * compare. Can use any Player based Value
	 * syntax to provide with.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Max Health(${player})`
}

