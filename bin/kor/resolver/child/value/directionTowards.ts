/**
 * 한 위치에서 다른 위치까지의 단위 길이 방향 벡터입니다.
 */
export const directionTowards = (
	/**
	 * 결과로 도출되는 방향 벡터가 시작되는 위치입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	startPos: string | number | any[],
	/**
	 * 결과로 도출되는 방향 벡터가 끝나는 위치입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	endPos: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction Towards(${startPos}, ${endPos})`
}

