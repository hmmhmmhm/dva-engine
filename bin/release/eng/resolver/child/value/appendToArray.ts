/**
 * A copy of an array with one or more values
 * appended to the end.
 */
export const appendToArray = (
	/**
	 * Array - You must specify the Array Syntax
	 * you are adding the value to.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Value - You must specify the Value Syntax
	 * that you are adding to the array.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
) => {

	return `Append To Array(${array}, ${value})`
}