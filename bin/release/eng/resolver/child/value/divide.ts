/**
 * The ratio of two numbers or vectors. A vector
 * divided by a number will yield a scaled
 * vector. Division by zero results in zero.
 */
export const divide = (
	/**
	 * Value - The left-hand operand, may be any
	 * value that results in a number or a vector.
	 * Any Value Syntax may be used here.
	 * - `Type.Divide.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand, may be any
	 * value that results in a number or a vector.
	 * Any Value Syntax may be used here.
	 * - `Type.Divide.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Divide(${value1}, ${value2})`
}

