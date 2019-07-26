/**
 * Instantly resurrects one or more players
 * at the location they died with no transition.
 */
export const resurrect = (
	/**
	 * Player - The player or players who will
	 * be resurrected. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Resurrect(${player})`
}