/**
 * 지정된 배열의 무작위 값입니다.
 */
export const randomValueInArray = (
	/**
	 * 무작위 값을 취할 배열입니다.
	 * 배열이 아닌 값이 주어진 경우,
	 * 주어진 값이 그대로 결과값이 됩니다.
	 * - `Type.Value.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	array: string | number | any[]
) => {

	return `Random Value In Array(${array})`
}