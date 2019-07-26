/**
 * The X Component of the specified Vector,
 * usually representing a leftward amount.
 */
export const xComponentOf = (
	/**
	 * Value - The vector from which to acquire
	 * the X component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	vector: string | number | any[]
): number => {

	// @ts-ignore
	return `X Component Of(${vector})`
}

