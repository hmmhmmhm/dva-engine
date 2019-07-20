/**
 * 두 방향 벡터 (정규화 불필요) 사이의 각입니다. (단위: 도)
 */
export const angleBetweenVectors = (
	/**
	 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	 * 이 벡터를 미리 정규화할 필요는 없습니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector1: string | number | any[],
	/**
	 * 사이의 각(단위: 도)을 측정하기 위한 두 방향 벡터 중 하나입니다.
	 * 이 벡터를 미리 정규화할 필요는 없습니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	vector2: string | number | any[]
): number => {

	// @ts-ignore
	return `Angle Between Vectors(${vector1}, ${vector2})`
}

