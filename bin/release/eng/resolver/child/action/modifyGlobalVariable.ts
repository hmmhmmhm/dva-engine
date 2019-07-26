/**
 * Modifies the value of a global variable,
 * which is a variable that belongs to the game itself.
 */
export const modifyGlobalVariable = (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.IGlobal.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	operation: string | number | any[],
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with new elements
	 * given a value of 0.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Modify Global Variable(${variable}, ${operation}, ${value})`
}