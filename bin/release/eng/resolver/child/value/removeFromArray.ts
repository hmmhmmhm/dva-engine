/**
 * A copy of an array with one or more values
 * removed (if found).
 */
export const removeFromArray = (
	/**
	 * Array - The array from which to remove values.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Value - The value to remove from the array
	 * (if found), if this value itself an array,
	 * each matching element is removed. Can use
	 * most Array based or Number based Value Syntax
	 * to provide this value.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Remove From Array(${array}, ${value})`
}

