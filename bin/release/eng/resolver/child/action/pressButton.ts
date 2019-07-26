/**
 * Forces one or more players to press a button
 * virtually for a single frame.
 */
export const pressButton = (
	/**
	 * Player - The player or players for whom
	 * virtual button input will be forced. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Button - The button to be pressed.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Press Button(${player}, ${button})`
}