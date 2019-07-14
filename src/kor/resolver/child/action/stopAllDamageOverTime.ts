/**
 * 플레이어를 대상으로
 * START DAMAGE OVER TIME
 * 액션에 의해 시작된 모든
 * DAMAGE OVER TIME을 중지합니다.
 */
export const stopAllDamageOverTime = (
	/**
	 * 스크립트에 의한
	 * DAMAGE OVER TIME이
	 * 중지되는 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Stop All Damage Over Time(${player})`
}