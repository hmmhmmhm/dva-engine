/**
 * Stops an in-progress chase of a player variable,
 * leaving it at its current value.
 */
export const stopChasingPlayerVariable = (
	/**
	 * Player - The player whose variable will
	 * stop changing. If multiple players are provided,
	 * each of their variables will stop changing.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Variable - Specifies which player variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable: string | number | any[]
) => {

	return `Stop Chasing Player Variable(${player}, ${variable})`
}