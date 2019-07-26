/**
 * 지정된 플레이어가 기술 2를 사용하는지 여부입니다.
 */
export const isUsingAbility2 = (
	/**
	 * 기술 2의 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Using Ability 2(${player})`
}