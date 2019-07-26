/**
 * Modifies the value of a global variable
 * at an index, which is a variable that belongs
 * to the game itself.
 */
export const modifyGlobalVariableAtIndex = (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.IGlobal.`
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	index: string | number | any[],
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation: string | number | any[],
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Modify Global Variable At Index(${variable}, ${index}, ${operation}, ${value})`
}