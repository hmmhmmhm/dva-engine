/**
 * 플레이어를 다른
 * 모든 플레이어 또는
 * 적에게만 보이지 않게 합니다.
 */
export const setInvisible = (
	/**
	 * 보이지 않게 될
	 * 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 플레이어가 보이지 않게 할
	 * 플레이어를 지정합니다.
	 * - `InvisibleTo.` 또는 `Type.InvisibleTo.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	invisibleTo: string
) => {

	return `Set Invisible(${player}, ${invisibleTo})`
}