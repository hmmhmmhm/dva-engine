/**
 * Sets the max health of one or more players
 * as a percentage of their raw max health.
 * This action will ensure that a player’s
 * current health will not exceed the new max health.
 */
export const setMaxHealth = (
	/**
	 * Player - The player or players whose max
	 * health will be set. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Player - The player or players whose move
	 * speed will be set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	healthPercent: string | number | any[]
) => {

	return `Set Max Health(${player}, ${healthPercent})`
}