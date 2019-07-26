/**
 * The current score for the specified team.
 * Results in a 0 in free-for-all game modes.
 */
export const teamScore = (
	/**
	 * Team - The team whose score to acquire.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Team Score(${team})`
}

