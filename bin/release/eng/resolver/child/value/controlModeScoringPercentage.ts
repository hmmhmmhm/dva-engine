/**
 * The score percentage for the specified team
 * in the control mode.
 */
export const controlModeScoringPercentage = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define which team reported when defining this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Control Mode Scoring Percentage(${team})`
}

