/**
 * 두 입력 정보의 비교 결과가 TRUE인지 여부입니다.
 */
export const compare = (
	/**
	 * 비교 연산의 좌측단입니다.
	 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
	 * 그 이외에는 실수 형식이어야 합니다.
	 * - `Type.Value.`
	 */
	value1: string | number | any[],
	/**
	 * - `Type.Operator.`
	 */
	operator: string | number | any[],
	/**
	 * 비교 연산의 우측단입니다.
	 * 연산이 == 또는 != 인 경우 어떤 값 유형이든 상관없지만,
	 * 그 이외에는 실수 형식이어야 합니다.
	 * - `Type.Value.`
	 */
	value2: string | number | any[]
) => {

	return `Compare(${value1}, ${operator}, ${value2})`
}