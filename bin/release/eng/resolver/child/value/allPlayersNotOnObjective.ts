/**
 * An array containing all players occupying
 * neither a payload nor a control point (either
 * on a team or in a match).
 */
export const allPlayersNotOnObjective = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players Not On Objective(${team})`
}

