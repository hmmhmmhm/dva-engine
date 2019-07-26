/**
 * Stops an in-progress chase of a global variable,
 * leaving it at its current value.
 */
export const stopChasingGlobalVariable = (
	/**
	 * Variable - Specifies which global variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	variable: string | number | any[]
) => {

	return `Stop Chasing Global Variable(${variable})`
}