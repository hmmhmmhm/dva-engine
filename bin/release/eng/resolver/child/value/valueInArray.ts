/**
 * The value found at a specific element of
 * an array. Results in a 0 if the element does not exist.
 */
export const valueInArray = (
	/**
	 * Array - The array whose element to acquire.
	 * Can use most Array based Value Syntax to
	 * provide this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Index - The index whose element to acquire.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string | number | any[]
) => {

	return `Value In Array(${array}, ${index})`
}