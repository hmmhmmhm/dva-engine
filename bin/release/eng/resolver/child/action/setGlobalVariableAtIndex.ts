/**
 * Finds or creates an array on a global variable,
 * which is a variable that belongs to the
 * game itself, then stores a value in the
 * array at the specified index.
 */
export const setGlobalVariableAtIndex = (
	/**
	 * Index - The index of the array to modify.
	 * If the index is beyond the end of the array,
	 * the array is extended with the new elements
	 * given a value of zero. Can use most Number
	 * based Value Syntax with this value.
	 * - `Type.Variable.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string | number | any[],
	/**
	 * Value - The value that will be stored into
	 * the array. Nearly any Value syntax can be
	 * used, however it is most common with Number based syntax.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Set Global Variable At Index(${variable}, ${index}, ${value})`
}