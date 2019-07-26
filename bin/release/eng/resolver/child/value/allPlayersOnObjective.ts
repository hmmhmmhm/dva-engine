/**
 * An array containing all players occupying
 * either a payload or a control point (either
 * on a team or in a match).
 */
export const allPlayersOnObjective = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players On Objective(${team})`
}

