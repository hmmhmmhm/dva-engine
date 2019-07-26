/**
 * The displacement vector from one position to another.
 */
export const vectorTowards = (
	/**
	 * Start Pos - The start position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - The end position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector Towards(${startPos}, ${endPos})`
}

