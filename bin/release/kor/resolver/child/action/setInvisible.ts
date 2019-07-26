/**
 * 플레이어를 다른
 * 모든 플레이어 또는
 * 적에게만 보이지 않게 합니다.
 */
export const setInvisible = (
	/**
	 * 보이지 않게 될
	 * 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 플레이어가 보이지 않게 할
	 * 플레이어를 지정합니다.
	 * - `Type.InvisibleTo.`
	 */
	invisibleTo: string | number | any[]
) => {

	return `Set Invisible(${player}, ${invisibleTo})`
}