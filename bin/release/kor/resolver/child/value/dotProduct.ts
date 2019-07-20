/**
 * 지정된 값의 점곱입니다.
 */
export const dotProduct = (
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * 점곱의 백터 피연산자 두 개 중 하나입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Dot Product(${value1}, ${value2})`
}

