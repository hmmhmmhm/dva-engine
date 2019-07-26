/**
 * Whether the specified player is using ability 2.
 */
export const isUsingAbility2 = (
	/**
	 * Player - The player whose ability 2 usage
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Using Ability 2(${player})`
}