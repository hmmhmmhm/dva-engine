/**
 * Sets the damage dealt to one or more players
 * of a percentage of their raw damage dealt.
 * NOTE: Negative values do not heal enemies.
 * Damage values of 0 or lower will not trigger script events.
 */
export const setDamageDealt = (
	/**
	 * Player - The player or players whose damage
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Damage Dealt Percent - The percentage of
	 * raw damage dealt to which the player or
	 * players will set their damage dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	damageDealtPercent: string | number | any[]
) => {

	return `Set Damage Dealt(${player}, ${damageDealtPercent})`
}