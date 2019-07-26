/**
 * The product of two numbers or vectors. A
 * vector multiplied by a number will yield
 * a scaled vector.
 */
export const multiply = (
	/**
	 * Value - The left-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Multiply.`
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. May be any
	 * value that results in a number. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Multiply.`
	 */
	value2: string | number | any[]
) => {

	return `Multiply(${value1}, ${value2})`
}