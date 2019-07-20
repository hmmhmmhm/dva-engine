/**
 * 서 있을 수 있고 생성 지점에서 접근 가능하며
 * 지정된 위치에서 가장 가까운 위치입니다.
 */
export const nearestWalkablePostion = (
	/**
	 * 가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Nearest Walkable Postion(${position})`
}

