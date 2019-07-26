/**
 * Provides an instantaneous heal to one or
 * more players. This heal will not resurrect dead players.
 */
export const heal = (
	/**
	 * Player - The player or players whose health
	 * will be restored. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Player - One or more players who will receive
	 * the heal over time. Can use most Player
	 * based Value Syntax.
	 * - `Type.AssisterParam.`
	 */
	healer: string | number | any[],
	/**
	 * Amount - The amount of healing to apply.
	 * This amount may be modified by buffs or
	 * debuffs, healing is capped by each player’s
	 * max health. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.`
	 */
	amount: string | number | any[]
) => {

	return `Heal(${player}, ${healer}, ${amount})`
}