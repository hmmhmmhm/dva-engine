/**
 * 두 숫자 중 낮은 수입니다.
 */
export const min = (
	/**
	 * 좌측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value1: string | number | any[],
	/**
	 * 우측 피연산자입니다.
	 * 결과값이 숫자로 나올 수 있는
	 * 아무 값이나 사용할 수 있습니다.
	 * - `Type.Number.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Min(${value1}, ${value2})`
}

