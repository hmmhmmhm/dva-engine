/**
 * 지정된 플레이어가 SET STATUS 액션 또는 스크립트 이외의
 * 게임 메카닉을 통해 지정된 상태를 갖게 되었는지 여부입니다.
 */
export const hasStatus = (
	/**
	 * 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 확인할 상태입니다.
	 * - `Type.Status.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	status: string
) => {

	return `Has Status(${player}, ${status})`
}