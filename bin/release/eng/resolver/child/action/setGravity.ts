/**
 * Sets the movement gravity for one or more
 * players to a percentage of regular movement gravity.
 */
export const setGravity = (
	/**
	 * Player - The player or players whose healing
	 * dealt will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Healing Dealt Percent - The percentage of
	 * raw healing dealt to which the player or
	 * players will set their healing dealt. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	gravityPercent: string | number | any[]
) => {

	return `Set Gravity(${player}, ${gravityPercent})`
}