/**
 * 맨 뒤에 하나 이상의 값을 덧붙인 배열의 복사본입니다.
 */
export const appendToArray = (
	/**
	 * 덧붙일 대상 배열입니다.
	 * - `Array.` 또는 `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 배열 후미에 덧붙일 값입니다.
	 * 이 값 자체가 배열인 경우 각 요소를 덧붙입니다.
	 * - `Value.` 또는 `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value: string
) => {

	return `Append To Array(${array}, ${value})`
}