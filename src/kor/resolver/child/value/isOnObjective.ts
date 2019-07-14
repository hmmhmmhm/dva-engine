/**
 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
 */
export const isOnObjective = (
	/**
	 * 목표 상태를 확인할 대상 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is On Objective(${player})`
}