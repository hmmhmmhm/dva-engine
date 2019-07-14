/**
 * 한 위치에서 다른 위치까지의 변위 벡터입니다.
 */
export const vectorTowards = (
	/**
	 * 변위 벡터가 시작하는 위치입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string,
	/**
	 * 변위 벡터가 종료되는 위치입니다.
	 * - `Vector.` 또는 `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string
) => {

	return `Vector Towards(${startPos}, ${endPos})`
}