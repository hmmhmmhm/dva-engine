/**
 * Displays a large message above the reticle
 * that is visible to specific players.
 */
export const bigMessage = (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Value Syntax
	 * to select multiple players to specify.
	 * - `Type.Player.`
	 */
	visibleTo: string | number | any[],
	/**
	 * Header - The message to be displayed. Can
	 * use most String based Value Syntax to specify.
	 * - `Type.String.`
	 */
	header: string | number | any[]
) => {

	return `Big Message(${visibleTo}, ${header})`
}