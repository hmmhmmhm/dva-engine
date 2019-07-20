/**
 * 지정된 방향 벡터에 대응하는 횡축각(단위: 도)입니다.
 */
export const horizontalAngleFromDirection = (
	/**
	 * 황축각(단위: 도)정보를 가져올 방향 벡터입니다.
	 * 이 벡터는 연산 전에 단위 벡터로 정규화됩니다.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[]
): number => {

	// @ts-ignore
	return `Horizontal Angle From Direction(${direction})`
}

