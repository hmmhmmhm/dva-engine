/**
 * Modifies the value of a global variable,
 * which is a variable that belongs to the game itself.
 */
export const modifyGlobalVariable = (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.IGlobal.`
	 */
	variable: string | number | any[],
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

	return `Modify Global Variable(${variable}, ${operation}, ${value})`
}