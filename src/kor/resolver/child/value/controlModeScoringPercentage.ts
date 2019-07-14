/**
 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
 */
export const controlModeScoringPercentage = (
	/**
	 * 점수 비율 정보를 가져올 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Control Mode Scoring Percentage(${team})`
}