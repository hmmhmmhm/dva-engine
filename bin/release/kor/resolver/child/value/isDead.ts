/**
 * 플레이어의 사망 여부입니다.
 */
export const isDead = (
	/**
	 * 사망 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Dead(${player})`
}