/**
 * 지정된 값의 점곱입니다.
 */
export const dotProduct = (
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.`
	 */
	value1: string | number | any[],
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Dot Product(${value1}, ${value2})`
}

