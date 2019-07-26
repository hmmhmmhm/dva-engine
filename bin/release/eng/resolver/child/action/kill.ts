/**
 * Instantly kills one or more players.
 */
export const kill = (
	/**
	 * Player - The player or players who will
	 * be killed. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Killer - The player who will receive credit
	 * for the kill. A killer of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.AssisterParam.`
	 */
	killer: string | number | any[]
) => {

	return `Kill(${player}, ${killer})`
}