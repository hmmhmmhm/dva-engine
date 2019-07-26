/**
 * Instantly ends the match with the specified
 * team as the winner. This action has no effect
 * in free-for-all modes.
 */
export const declareTeamVictory = (
	/**
	 * Team - The winning team. Can use most Team
	 * based Value Syntax for this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Declare Team Victory(${team})`
}