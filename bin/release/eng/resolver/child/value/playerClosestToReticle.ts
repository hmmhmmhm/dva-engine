/**
 * The player closest to the reticle of the
 * specified player, optionally restricted by team.
 */
export const playerClosestToReticle = (
	/**
	 * Player - The player from whose reticle to
	 * search for the closest player. Can use most
	 * Player based Value Syntax to provide this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Team - The team or teams on which to search
	 * for the closest player. Can use most Team
	 * based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Player Closest To Reticle(${player}, ${team})`
}