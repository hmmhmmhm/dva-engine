/**
 * Undoes the effect of the start holding button
 * action for one or more players.
 */
export const stopHoldingButton = (
	/**
	 * Player - The player or players who are no
	 * longer holding a button virtually. Can use
	 * most Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * The logical button that is no longer being held virtually.
	 * - `Type.Button.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	button: string | number | any[]
) => {

	return `Stop Holding Button(${player}, ${button})`
}