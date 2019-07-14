/**
 * 한 배열의 지정된 요소에 있는 값입니다.
 * 대상 요소가 없는 경우 결과값은 0입니다.
 */
export const valueInArray = (
	/**
	 * 요소 정보를 가져올 대상 배열입니다.
	 * - `Array.` 또는 `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 요소 정보를 가져올 인덱스입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string
) => {

	return `Value In Array(${array}, ${index})`
}