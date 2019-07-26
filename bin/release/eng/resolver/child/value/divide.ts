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
	 * - `Type.Divide.`
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand, may be any
	 * value that results in a number or a vector.
	 * Any Value Syntax may be used here.
	 * - `Type.Divide.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Divide(${value1}, ${value2})`
}

