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
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Accelerating(${player})`
}