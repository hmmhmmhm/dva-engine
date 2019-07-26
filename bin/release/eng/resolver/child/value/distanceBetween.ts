/**
 * The distance between two positions in meters.
 */
export const distanceBetween = (
	/**
	 * Start Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - One of the two positions used
	 * in the distance measurement. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Distance Between(${startPos}, ${endPos})`
}

