/**
 * Starts forcing one or more players to be
 * a specified hero and, if necessary, respawns
 * them immediately in their current locaiton.
 * This will be the only hero available to
 * the player or players until, the stop forcing
 * player to be hero action is executed.
 */
export const startForcingPlayerToBeHero = (
	/**
	 * Player - The player or players who will
	 * be forced to be a specified hero. Can use
	 * most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Hero - The hero that the player or players
	 * will be forced to be. Can use most Hero
	 * based Value Syntax.
	 * - `Type.Hero.`
	 */
	hero: string | number | any[]
) => {

	return `Start Forcing Player To Be Hero(${player}, ${hero})`
}