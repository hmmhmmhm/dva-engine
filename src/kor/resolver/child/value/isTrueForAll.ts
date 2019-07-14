/**
 * 지정된 배열의 모든 값이 지정된 조건에 대해 TRUE인지 여부입니다.
 */
export const isTrueForAll = (
	/**
	 * 값을 확인할 배열입니다.
	 * - `Array.` 또는 `Type.Array.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string,
	/**
	 * 지정된 배열의 각 요소에 대해 확인할 조건입니다.
	 * 현재 확인 대상인 배열의 요소를 참조할 때는
	 * CURRENT ARRAY ELEMENT 값을 사용하십시오.
	 * - `Bool.` 또는 `Type.Bool.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	condition: string
) => {

	return `Is True For All(${array}, ${condition})`
}