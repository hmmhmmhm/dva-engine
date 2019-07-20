/**
 * 지정된 팀의 현재 점수입니다.
 * 개별 전투 모드에서는 결과값이 0입니다.
 */
export const teamScore = (
	/**
	 * 점수 정보를 가져올 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Team Score(${team})`
}

