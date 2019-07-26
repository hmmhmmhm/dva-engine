/**
 * Forces one or more players to hold a button
 * virtually until stopped by the stop holding button action.
 */
export const startHoldingButton = (
	/**
	 * Player - The player or players who are holding
	 * a button virtually. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Button - The logical button that is being held virtually.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Start Holding Button(${player}, ${button})`
}