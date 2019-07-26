/**
 * Displays a small message beneath the reticle
 * that is visible to specific players.
 */
export const smallMessage = (
	/**
	 * Visible to - One or more players who will
	 * see the message. Can use most Player based Value Syntax.
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

	return `Small Message(${visibleTo}, ${header})`
}