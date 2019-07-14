/**
 * 지정된 범위 인덱스의 값만을
 * 포함하고 있는 지정된 배열의 복사본입니다.
 */
export const arraySlice = (
	/**
	 * 복사본을 만들 배열입니다.
	 * - `Array.` 또는 `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 첫번째 범위의 인덱스입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	index: string,
	/**
	 * 결과 배열의 요소 개수입니다.
	 * 설정 영역이 배열 범위를 벗어나는 경우
	 * 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	count: string
) => {

	return `Array Slice(${array}, ${index}, ${count})`
}