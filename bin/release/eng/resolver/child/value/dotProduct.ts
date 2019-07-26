/**
 * The dot product of the specified values.
 * The dot product tells you what amount of
 * one vector goes in the direction of another.
 */
export const dotProduct = (
	/**
	 * Value - One of the two vector operands of
	 * the dot product. Any positional based Syntax
	 * may be used here.
	 * - `Type.Vector.`
	 */
	value1: string | number | any[],
	/**
	 * Value - One of the two vector operands of
	 * the dot product. Any positional based Syntax
	 * may be used here.
	 * - `Type.Vector.`
	 */
	value2: string | number | any[]
): number => {

	// @ts-ignore
	return `Dot Product(${value1}, ${value2})`
}

