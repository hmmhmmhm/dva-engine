/**
 * 지정된 목표가 있는 월드 내의
 * 위치(거점, 화물 경유지, 화물 목적지) 입니다.
 * 점령, 점령/호위, 호위, 쟁탈 전장에서 유효합니다.
 */
export const objectivePosition = (
	/**
	 * 고려해야 하는 목표의 인덱스로서,
	 * 0에서 시작하여 증가합니다.
	 * 각 거점, 화물 경유지, 화물 목적지에는
	 * 각기 고유의 인덱스가 있습니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	number: string | number | any[]
): number => {

	// @ts-ignore
	return `Objective Position(${number})`
}

