/**
 * Modifies the score (kill count) of one or
 * more players. This action only has an effect
 * in free-for-all modes.
 */
export const modifyPlayerScore = (
	/**
	 * Player - The player whose score will change.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Team - The team whose score will be changed.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score: string | number | any[]
) => {

	return `Modify Player Score(${player}, ${score})`
}