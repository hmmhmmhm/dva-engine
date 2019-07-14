/**
 * 플레이어가 착지(또는 걷기가 가능한 표면에 있는) 상태인지 여부입니다.
 */
export const isOnGround = (
	/**
	 * 착지 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is On Ground(${player})`
}