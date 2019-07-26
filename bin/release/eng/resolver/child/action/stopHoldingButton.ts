/**
 * Undoes the effect of the start holding button
 * action for one or more players.
 */
export const stopHoldingButton = (
	/**
	 * Player - The player or players who are no
	 * longer holding a button virtually. Can use
	 * most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * The logical button that is no longer being held virtually.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Stop Holding Button(${player}, ${button})`
}