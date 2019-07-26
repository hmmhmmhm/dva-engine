/**
 * A copy of the specified array with the values
 * sorted according to the value rank that
 * is evaluated for each element.
 */
export const sortedArray = (
	/**
	 * Array - The array whose copy will be sorted.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Value Rank - The value that is evaluated
	 * for each element of the copied array. The
	 * array is sorted by this rank in ascending
	 * order. Use the current array element value
	 * to reference the element of the array currently
	 * being considered. Can use most Number based
	 * Value Syntax to provide this value.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	valueRank: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Sorted Array(${array}, ${valueRank})`
}

