/**
 * 두 숫자 또는 벡터의 합입니다.
 */
export const add = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로
	 * 나올 수 있는 아무 값이나
	 * 사용할 수 있습니다.
	 * - `Type.Add.`
	 */
	value1: string | number | any[],
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로
	 * 나올 수 있는 아무 값이나
	 * 사용할 수 있습니다.
	 * - `Type.Add.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Add(${value1}, ${value2})`
}

