/**
 * Sets the healing received of one or more
 * players to a percentage of their raw healing
 * received. NOTE: Negative values do not damage
 * enemies. Healing values of 0 or lower will
 * not trigger script events.
 */
export const setHealingReceived = (
	/**
	 * Player - The player or players whose healing
	 * received will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Healing Received Percent - The percentage
	 * of raw healing received to which the player
	 * or players will set their healing received.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healingReceivedPercent: string | number | any[]
) => {

	return `Set Healing Received(${player}, ${healingReceivedPercent})`
}