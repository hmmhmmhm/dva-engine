/**
 * The unit-length direction vector from position to another.
 */
export const directionTowards = (
	/**
	 * Start Pos - The position from which the
	 * resulting direction vector will point. Most
	 * positional based Value Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string | number | any[],
	/**
	 * End Pos - The position to which the resulting
	 * direction vector will point. Most positional
	 * based Value Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction Towards(${startPos}, ${endPos})`
}

