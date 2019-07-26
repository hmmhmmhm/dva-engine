/**
 * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
 * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
 */
export const hasStatus = (
	/**
	 * 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 확인할 상태입니다.
	 * - `Type.Status.`
	 */
	status: string | number | any[]
) => {

	return `Has Status(${player}, ${status})`
}