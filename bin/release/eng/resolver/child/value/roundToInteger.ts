/**
 * The integer to which the specified value rounds.
 */
export const roundToInteger = (
	/**
	 * Value - The real number to round. Can use
	 * most Number based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	value: string | number | any[],
	/**
	 * Rounding Type - Determines the direction
	 * in which the value will be rounded. You
	 * can round up, down, or to the nearest integer.
	 * - `Type.Rounding.`
	 */
	roundingType: string | number | any[]
): number => {

	// @ts-ignore
	return `Round To Integer(${value}, ${roundingType})`
}

