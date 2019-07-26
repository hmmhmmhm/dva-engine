/**
 * Stores a value into a global variable, which
 * a variable that belongs to the game itself.
 */
export const setGlobalVariable = (
	/**
	 * Variable - Specifies which Global Variable
	 * to store the value into. Specified by a
	 * single alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Set Global Variable(${variable}, ${value})`
}