/**
 * A team constant. The all option represents
 * both teams in a team or all players in a
 * free-for-all game.
 */
export const team = (
	/**
	 * - `Type.TeamConstant.`
	 */
	team: string | number | any[]
) => {

	return `Team(${team})`
}