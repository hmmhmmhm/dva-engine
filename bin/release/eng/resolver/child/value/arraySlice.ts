/**
 * A copy of the specified array containing
 * only values from a specified index range.
 */
export const arraySlice = (
	/**
	 * Array - You must specify the Array Syntax
	 * you are comparing the value to.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Start Index - The first index of the range.
	 * Can use most Value Syntax to specify with.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string | number | any[],
	/**
	 * Count - The number of elements in the resulting
	 * array. The resulting array will contain
	 * fewer elements if the specified range exceeds
	 * the bounds of the array. Can use any Number-based
	 * Value Syntax to specify with.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	count: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Array Slice(${array}, ${index}, ${count})`
}

