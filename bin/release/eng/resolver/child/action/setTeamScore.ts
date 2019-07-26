/**
 * Sets the score for one or both teams. This
 * action has no effect in free-for-all modes
 * or modes without a team score.
 */
export const setTeamScore = (
	/**
	 * Score - The score that will be set. Can
	 * use most Number based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * Team - The team or teams whose score will
	 * be set. Can use most Team based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score: string | number | any[]
) => {

	return `Set Team Score(${team}, ${score})`
}