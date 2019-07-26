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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Variable - Specifies which player variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[]
) => {

	return `Stop Chasing Player Variable(${player}, ${variable})`
}