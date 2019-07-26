/**
 * Stores a value into a player variable, which
 * is a variable that belongs to a specific player.
 */
export const setPlayerVariable = (
	/**
	 * Variable - Specifies which Player Variable
	 * to store the value into. Specified by a
	 * single alphabetic letter (A through Z).
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Value - The value that will be stored. Nearly
	 * any Value syntax can be used, however it
	 * is most common with Number based syntax.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Set Player Variable(${player}, ${variable}, ${value})`
}