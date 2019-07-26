/**
 * 배열 내에 있는 값의 인덱스입니다.
 * 해당 값을 찾을 수 없는 경우 -1입니다.
 */
export const indexOfArrayValue = (
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
): number => {

	// @ts-ignore
	return `Index Of Array Value(${array}, ${value})`
}

