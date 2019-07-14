/**
 * 지정된 배열에 지정된 값이 있는지 여부입니다.
 */
export const arrayContains = (
	/**
	 * 지정된 값을 검색할 배열입니다.
	 * - `Array.` 또는 `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 검색할 값입니다.
	 * - `Value.` 또는 `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string
) => {

	return `Array Contains(${array}, ${value})`
}