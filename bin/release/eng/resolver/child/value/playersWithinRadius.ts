/**
 * An array containing all players within a
 * certain distance of a position, optionally
 * restricted by team and line of sight.
 */
export const playersWithinRadius = (
	/**
	 * Center - The center position from which
	 * to measure distance. Can use most Vector
	 * based Value Syntax to provide this value.
	 * - `Type.Vector.`
	 */
	center: string | number | any[],
	/**
	 * Radius - The radius in meters inside which
	 * players must be in order to be included
	 * in the resulting array. Can use most Number
	 * based Value Syntax to provide this value.
	 * - `Type.Number.`
	 */
	radius: string | number | any[],
	/**
	 * Team - The team or teams to which a player
	 * must belong to be included in the resulting
	 * array. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[],
	/**
	 * LOS Check - Specifies whether and how a
	 * player must pass a line-of-sight check to
	 * be included in the resulting array. You
	 * can choose from Off, Surfaces, Surfaces
	 * and Enemy Barriers, and Surfaces and All
	 * Barriers. Off will result in the line of
	 * sight is never blocked, allowing results
	 * through walls. Surfaces will result in line
	 * of sight is blocked by ceilings, walls,
	 * floors, platforms, and any fixed object
	 * that blocks projectiles. Surfaces and Enemy
	 * Barriers will result in line of sight is
	 * blocked by ceilings, walls, floors, platforms,
	 * any fixed object that blocks projectiles,
	 * and barriers created by the enemy team.
	 * Surfaces and All Barriers will result in
	 * line of sight is blocked by ceilings, walls,
	 * floors, platforms, any fixed object that
	 * blocks projectiles, and all barriers.
	 * - `Type.LosCheck.`
	 */
	losCheck: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players Within Radius(${center}, ${radius}, ${team}, ${losCheck})`
}

