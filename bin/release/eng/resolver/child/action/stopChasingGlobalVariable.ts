/**
 * Stops an in-progress chase of a global variable,
 * leaving it at its current value.
 */
export const stopChasingGlobalVariable = (
	/**
	 * Variable - Specifies which global variable
	 * to stop modifying. Specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[]
) => {

	return `Stop Chasing Global Variable(${variable})`
}