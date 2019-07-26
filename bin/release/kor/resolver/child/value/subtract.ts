/**
 * 두 숫자 또는 벡터의 차이입니다.
 */
export const subtract = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Subtract.`
	 */
	value1: string | number | any[],
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자 또는 벡터로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Subtract.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Subtract(${value1}, ${value2})`
}

