/**
 * The players who are within a specific view
 * angle of a specific player’s reticle, optionally
 * restricted by team.
 */
export const playersInViewAngle = (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * View Angle - The view angle to compare against
	 * in degrees. Can use most Angle based Value
	 * Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.`
	 */
	viewAngle: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players In View Angle(${player}, ${team}, ${viewAngle})`
}

