/**
 * Sets the damage received of one or more
 * players to a percentage of their raw damage
 * received. NOTE: Negative values do not heal
 * enemies. Damage values of 0 or lower will
 * not trigger script events.
 */
export const setDamageReceived = (
	/**
	 * Player - The player or players whose damage
	 * received will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Damage Received Percent - The percentage
	 * of raw damage received to which the player
	 * or players will set their damage received.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	damageReceivedPercent: string | number | any[]
) => {

	return `Set Damage Received(${player}, ${damageReceivedPercent})`
}