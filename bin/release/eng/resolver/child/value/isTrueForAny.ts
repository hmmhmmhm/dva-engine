/**
 * Whether the specified condition evaluates
 * to true for any value in the specified array.
 */
export const isTrueForAny = (
	/**
	 * Array - The array whose values will be considered.
	 * Can use most Array Based Value Syntax to
	 * retrieve this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Condition - The condition that is evaluated
	 * for each element of the specified array,
	 * Use the current array element value to reference
	 * the element of the array currently being
	 * considered. Can use most Comparative based
	 * Value Syntax to retrieve this value.
	 * - `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string | number | any[]
) => {

	return `Is True For Any(${array}, ${condition})`
}