/**
 * Sets the aim speed of one or more players
 * to a percentage of their normal aim speed.
 */
export const setAimSpeed = (
	/**
	 * Player - The player or players whose aim
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Turn Speed Percent - The percentage of normal
	 * aim speed to which the player or players
	 * will set their aim speed. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	turnSpeedPercent: string | number | any[]
) => {

	return `Set Aim Speed(${player}, ${turnSpeedPercent})`
}