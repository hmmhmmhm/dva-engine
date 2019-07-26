/**
 * The team opposite the specified team.
 */
export const oppositeTeamOf = (
	/**
	 * Team - The team whose opposite to acquire.
	 * If all, the result will be all. Can use
	 * most Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Opposite Team Of(${team})`
}