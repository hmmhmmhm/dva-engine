/**
 * 쟁탈 전장에서 지정된 팀의 점수 비율입니다.
 */
export const controlModeScoringPercentage = (
	/**
	 * 점수 비율 정보를 가져올 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Control Mode Scoring Percentage(${team})`
}

