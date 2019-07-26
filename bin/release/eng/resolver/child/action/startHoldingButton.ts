/**
 * Forces one or more players to hold a button
 * virtually until stopped by the stop holding button action.
 */
export const startHoldingButton = (
	/**
	 * Player - The player or players who are holding
	 * a button virtually. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Button - The logical button that is being held virtually.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Start Holding Button(${player}, ${button})`
}