/**
 * Forces one or more players to press a button
 * virtually for a single frame.
 */
export const pressButton = (
	/**
	 * Player - The player or players for whom
	 * virtual button input will be forced. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Button - The button to be pressed.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Press Button(${player}, ${button})`
}