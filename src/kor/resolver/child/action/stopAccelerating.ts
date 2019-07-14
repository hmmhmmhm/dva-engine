/**
 * 플레이어를 대상으로
 * START ACCELERATING
 * 액션에 의해 시작된
 * 가속을 중지합니다.
 */
export const stopAccelerating = (
	/**
	 * 가속을 중지하게 되는
	 * 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Stop Accelerating(${player})`
}