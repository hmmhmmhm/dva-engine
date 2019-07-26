/**
 * The difference between two numbers or vectors.
 */
export const subtract = (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number or a vector.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Subtract.`
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number or a vector.
	 * Can use most Number based Value Syntax to
	 * provide this value.
	 * - `Type.Subtract.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Subtract(${value1}, ${value2})`
}

