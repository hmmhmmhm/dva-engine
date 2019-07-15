/**
 * 플레이어가 웅크리고 있는 상태인지 여부입니다.
 */
export const isCrouching = (
	/**
	 * 웅크린 상태를 확인할 대상 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is Crouching(${player})`
}