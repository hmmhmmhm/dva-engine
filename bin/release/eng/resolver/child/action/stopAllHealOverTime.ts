/**
 * Stops all heal over time started by the
 * start heal over time or one or more players.
 */
export const stopAllHealOverTime = (
	/**
	 * Player - The player or players whose scripted
	 * heal over time will stop. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop All Heal Over Time(${player})`
}