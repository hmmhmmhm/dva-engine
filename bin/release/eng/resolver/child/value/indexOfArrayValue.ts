/**
 * The index of a value within an array or
 * -1 if no such value can be found.
 */
export const indexOfArrayValue = (
	/**
	 * Array - The array in which to search for
	 * the specified value. Can use most Array
	 * based Value Syntax to retrieve this value.
	 * - `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[],
	/**
	 * Value - The value for which to search. Can
	 * use most Number based Value Syntax to retrive this value.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string | number | any[]
): number => {

	// @ts-ignore
	return `Index Of Array Value(${array}, ${value})`
}

