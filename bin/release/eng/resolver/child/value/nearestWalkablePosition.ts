/**
 * The position closest to the specified position
 * that can be stood on and is accessible from a spawn point.
 */
export const nearestWalkablePosition = (
	/**
	 * Position - The position from which to search
	 * for the nearest walkable position. Can use
	 * any Vector based Value syntax to divide with.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Nearest Walkable Position(${position})`
}

