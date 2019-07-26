/**
 * 두 위치 사이의 거리(미터)입니다.
 */
export const distanceBetween = (
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Type.Vector.`
	 */
	startPos: string | number | any[],
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Type.Vector.`
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Distance Between(${startPos}, ${endPos})`
}

