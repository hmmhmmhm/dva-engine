/**
 * The current ultimate ability charge percentage of a player.
 */
export const ultimateChargePercent = (
	/**
	 * Player - The player whose ultimate charge
	 * percentage to acquire. Can use most Player
	 * based Value Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Ultimate Charge Percent(${player})`
}

