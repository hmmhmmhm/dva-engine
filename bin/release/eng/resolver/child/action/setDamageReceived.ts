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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Damage Received Percent - The percentage
	 * of raw damage received to which the player
	 * or players will set their damage received.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	damageReceivedPercent: string | number | any[]
) => {

	return `Set Damage Received(${player}, ${damageReceivedPercent})`
}