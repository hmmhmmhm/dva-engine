/**
 * 지정된 플레이어가 현재 화물 또는 점령 지점을 점유하고 있는지 여부입니다.
 */
export const isOnObjective = (
	/**
	 * 목표 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is On Objective(${player})`
}