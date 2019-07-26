/**
 * Undoes the effect of the disallow button
 * action for one or more players.
 */
export const allowButton = (
	/**
	 * Player - The player or players whose button
	 * is being reenabled. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Button - The logical button that is being reenabled.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Allow Button(${player}, ${button})`
}