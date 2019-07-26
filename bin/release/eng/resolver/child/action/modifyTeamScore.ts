/**
 * Modifies the score of one or both teams.
 * This action has not effect in free-for-all
 * modes or modes without a team score.
 */
export const modifyTeamScore = (
	/**
	 * Score - The amount the score will increase
	 * or decrease. If positive, the score will
	 * increase. If negative, the score will decrease.
	 * Can use most Number based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * Team - The team whose score will be changed.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Number.`
	 */
	score: string | number | any[]
) => {

	return `Modify Team Score(${team}, ${score})`
}