/**
 * Sets the move speed of one or more players
 * to a percentage of their raw move speed.
 */
export const setMoveSpeed = (
	/**
	 * Health Percent - The percentage of raw move
	 * speed to which the player or players will
	 * set their move speed. Can use most Number
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
	moveSpeedPercent: string | number | any[]
) => {

	return `Set Move Speed(${player}, ${moveSpeedPercent})`
}