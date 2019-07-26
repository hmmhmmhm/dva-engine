/**
 * The unit-length direction vector from position to another.
 */
export const directionTowards = (
	/**
	 * Start Pos - The position from which the
	 * resulting direction vector will point. Most
	 * positional based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - The position to which the resulting
	 * direction vector will point. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction Towards(${startPos}, ${endPos})`
}

