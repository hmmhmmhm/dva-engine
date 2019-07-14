/**
 * 플레이어가 현재 사용하는 영웅입니다.
 */
export const heroOf = (
	/**
	 * 영웅 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Hero Of(${player})`
}