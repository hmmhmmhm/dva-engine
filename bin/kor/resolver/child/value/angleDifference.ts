/**
 * 두 각을 비교한 각도 차이(단위: 도) 입니다. 두 각을 서로 +/- 180
 * 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다.
 * 이외의 경우 0이나 음수가 될 수 있습니다.
 */
export const angleDifference = (
	/**
	 * 결과각을 도출하기 위한 두 각 중 하나입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	angle1: string | number | any[],
	/**
	 * 결과각을 도출하기 위한 두 각 중 하나입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	angle2: string | number | any[]
): number => {

	// @ts-ignore
	return `Angle Difference(${angle1}, ${angle2})`
}

