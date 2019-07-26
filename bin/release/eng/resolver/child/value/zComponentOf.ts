/**
 * The Z Component of the specified Vector,
 * usually representing a forward amount.
 */
export const zComponentOf = (
	/**
	 * Value - The vector from which to acquire
	 * the Z component. Can use most Vector based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	vector: string | number | any[]
): number => {

	// @ts-ignore
	return `Z Component Of(${vector})`
}

