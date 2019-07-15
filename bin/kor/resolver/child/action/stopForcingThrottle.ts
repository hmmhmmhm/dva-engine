/**
 * 플레이어에 대해
 * START FORCING THROTTLE
 * 액션의 효과를 취소합니다.
 */
export const stopForcingThrottle = (
	/**
	 * 이동 입력 정보가
	 * 복원될 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Stop Forcing Throttle(${player})`
}