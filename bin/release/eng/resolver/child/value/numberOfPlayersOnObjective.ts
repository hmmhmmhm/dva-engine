/**
 * The number of players occupying a payload
 * or a control point (either on a team or in the match).
 */
export const numberOfPlayersOnObjective = (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Players On Objective(${team})`
}

