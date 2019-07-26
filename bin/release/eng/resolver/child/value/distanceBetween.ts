/**
 * The distance between two positions in meters.
 */
export const distanceBetween = (
	/**
	 * Start Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Distance Between(${startPos}, ${endPos})`
}

