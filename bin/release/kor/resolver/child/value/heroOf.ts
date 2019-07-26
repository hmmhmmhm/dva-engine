/**
 * 플레이어가 현재 사용하는 영웅입니다.
 */
export const heroOf = (
	/**
	 * 영웅 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Hero Of(${player})`
}