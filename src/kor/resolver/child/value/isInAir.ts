/**
 * 플레이어가 공중에 있는 상태인지 여부입니다.
 */
export const isInAir = (
	/**
	 * 공중에 있는 상태인지를 확인할 대상 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is In Air(${player})`
}