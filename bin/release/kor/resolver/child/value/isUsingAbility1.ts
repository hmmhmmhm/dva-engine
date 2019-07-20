/**
 * 지정된 플레이어가 기술 1을 사용하는지 여부입니다.
 */
export const isUsingAbility1 = (
	/**
	 * 기술 1의 사용 여부를 확인할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Using Ability 1(${player})`
}