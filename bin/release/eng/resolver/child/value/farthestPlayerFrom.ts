/**
 * The player farthest to a position, optionally
 * restricted by team.
 */
export const farthestPlayerFrom = (
	/**
	 * Center - The position to which to measure
	 * proximity. Can use most Value Syntax related
	 * to reporting a position in the map.
	 * - `Type.Vector.`
	 */
	center: string | number | any[],
	/**
	 * Team - You can specify any Team Syntax to
	 * restrict which players is reported when
	 * defining this value.
	 * - `Type.Player.`
	 */
	team: string | number | any[]
) => {

	return `Farthest Player From(${center}, ${team})`
}