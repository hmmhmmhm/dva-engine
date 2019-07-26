/**
 * 한 배열의 지정된 요소에 있는 값입니다.
 * 대상 요소가 없는 경우 결과값은 0입니다.
 */
export const valueInArray = (
	/**
	 * 요소 정보를 가져올 대상 배열입니다.
	 * - `Type.Array.`
	 */
	array: string | number | any[],
	/**
	 * 요소 정보를 가져올 인덱스입니다.
	 * - `Type.Number.`
	 */
	index: string | number | any[]
) => {

	return `Value In Array(${array}, ${index})`
}