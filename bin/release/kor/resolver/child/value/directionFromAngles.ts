/**
 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
 */
export const directionFromAngles = (
	/**
	 * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	horizontalAngle: string | number | any[],
	/**
	 * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
	 * - `Type.Number.`
	 */
	verticalAngle: string | number | any[]
): number => {

	// @ts-ignore
	return `Direction From Angles(${horizontalAngle}, ${verticalAngle})`
}

