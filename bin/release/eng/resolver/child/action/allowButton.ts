/**
 * Undoes the effect of the disallow button
 * action for one or more players.
 */
export const allowButton = (
	/**
	 * Player - The player or players whose button
	 * is being reenabled. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Button - The logical button that is being reenabled.
	 * - `Type.Button.`
	 */
	button: string | number | any[]
) => {

	return `Allow Button(${player}, ${button})`
}