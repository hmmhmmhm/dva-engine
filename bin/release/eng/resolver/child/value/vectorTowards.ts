/**
 * The displacement vector from one position to another.
 */
export const vectorTowards = (
	/**
	 * Start Pos - The start position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - The end position for the line
	 * of sight check. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector Towards(${startPos}, ${endPos})`
}

