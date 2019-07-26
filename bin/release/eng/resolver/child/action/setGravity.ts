/**
 * Sets the movement gravity for one or more
 * players to a percentage of regular movement gravity.
 */
export const setGravity = (
	/**
	 * Player - The player or players whose healing
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Healing Dealt Percent - The percentage of
	 * raw healing dealt to which the player or
	 * players will set their healing dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	gravityPercent: string | number | any[]
) => {

	return `Set Gravity(${player}, ${gravityPercent})`
}