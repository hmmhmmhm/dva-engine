/**
 * Sets the ultimate charge or one or more
 * players as a percentage of maximum charge.
 */
export const setUltimateCharge = (
	/**
	 * Player - The player or players whose ultimate
	 * charge will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Charge Percent - The percentage of maximum
	 * charge. Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	chargePercent: string | number | any[]
) => {

	return `Set Ultimate Charge(${player}, ${chargePercent})`
}