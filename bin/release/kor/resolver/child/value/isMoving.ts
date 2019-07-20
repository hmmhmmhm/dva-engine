/**
 * 플레이어가 이동하고 있는지
 * 여부(현재 속도가 0인지 여부로 판단)입니다.
 */
export const isMoving = (
	/**
	 * 이동 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Moving(${player})`
}