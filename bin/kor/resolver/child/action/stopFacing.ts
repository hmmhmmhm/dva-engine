/**
 * 플레이어에 대해 START FACING
 * 액션에 의해 시작된 회전을 중지합니다.
 */
export const stopFacing = (
	/**
	 * 회전을 멈출 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop Facing(${player})`
}