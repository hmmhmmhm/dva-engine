/**
 * 지정된 배열에 지정된 값이 있는지 여부입니다.
 */
export const arrayContains = (
	/**
	 * 지정된 값을 검색할 배열입니다.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * 검색할 값입니다.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Array Contains(${array}, ${value})`
}