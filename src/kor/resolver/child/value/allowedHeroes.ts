/**
 * 지정된 플레이어가 선택할 수 있는 영웅 배열입니다.
 */
export const allowedHeroes = (
	/**
	 * 이 플레이어가 선택할 수 있는 영웅 목록을 가져옵니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Allowed Heroes(${player})`
}