/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
export const vectorTowards = (
	/**
	 * 변위 벡터가 시작하는 위치입니다.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * 변위 벡터가 종료되는 위치입니다.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Vector Towards(${startPos}, ${endPos})`
}

