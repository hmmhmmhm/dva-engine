/**
 * Instantly ends the match with the specific
 * player as the winner. This action only has
 * an effect in free-for-all modes.
 */
export const declarePlayerVictory = (
	/**
	 * Player - The winning player. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Declare Player Victory(${player})`
}