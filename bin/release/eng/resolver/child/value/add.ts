/**
 * The sum of two numbers or vectors. This
 * value will add the two specified values.
 */
export const add = (
	/**
	 * Value - You can specify any Value Syntax
	 * to define either addend.
	 * - `Type.Add.`
	 */
	value1: string | number | any[],
	/**
	 * Value - The right-hand operand. may be any
	 * value that results in a number or a vector.
	 * - `Type.Add.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Add(${value1}, ${value2})`
}

