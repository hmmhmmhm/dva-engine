/**
 * 지정된 플레이어의 초상화가 폭주 상태인지 여부입니다.
 */
export const isPortraitOnFire = (
	/**
	 * 초상화를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Portrait On Fire(${player})`
}