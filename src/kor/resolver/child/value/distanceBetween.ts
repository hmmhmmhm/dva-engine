/**
 * 두 위치 사이의 거리(미터)입니다.
 */
export const distanceBetween = (
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string,
	/**
	 * 거리 측정에 사용되는 두 위치 중 하나입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string
) => {

	return `Distance Between(${startPos}, ${endPos})`
}