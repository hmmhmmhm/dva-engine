/**
 * The score percentage for the specified team
 * in the control mode.
 */
export const controlModeScoringPercentage = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define which team reported when defining this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Control Mode Scoring Percentage(${team})`
}

