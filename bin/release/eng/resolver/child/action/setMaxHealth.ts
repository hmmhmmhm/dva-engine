/**
 * Sets the max health of one or more players
 * as a percentage of their raw max health.
 * This action will ensure that a player’s
 * current health will not exceed the new max health.
 */
export const setMaxHealth = (
	/**
	 * Player - The player or players whose max
	 * health will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Player - The player or players whose move
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Number.`
	 */
	healthPercent: string | number | any[]
) => {

	return `Set Max Health(${player}, ${healthPercent})`
}