/**
 * Whether the specified array contains the
 * specified value.
 */
export const arrayContains = (
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
) => {

	return `Array Contains(${array}, ${value})`
}