/**
 * 플레이어를 대상으로
 * START HEAL OVER TIME
 * 액션에 의해 시작된 모든
 * HEAL OVER TIME을 중지합니다.
 */
export const stopAllHealOverTime = (
	/**
	 * 스크립트에 의한
	 * HEAL OVER TIME이
	 * 중지되는 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop All Heal Over Time(${player})`
}