/**
 * Sets the healing dealt to one or more players
 * of a percentage of their raw damage dealt.
 * NOTE: Negative values do not damage enemies.
 * Healing values of 0 or lower will not trigger script events.
 */
export const setHealingDealt = (
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
	healingDealtPercent: string | number | any[]
) => {

	return `Set Healing Dealt(${player}, ${healingDealtPercent})`
}