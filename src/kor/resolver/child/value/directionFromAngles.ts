/**
 * 지정된 각에 대응하는 단위 길이 방향 벡터입니다.
 */
export const directionFromAngles = (
	/**
	 * 결과 벡터를 도출하는 데 사용되는 황축각(단위: 도)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	horizontalAngle: string,
	/**
	 * 결과 벡터를 도출하는 데 사용되는 종축각(단위: 도)입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	verticalAngle: string
) => {

	return `Direction From Angles(${horizontalAngle}, ${verticalAngle})`
}