/**
 * Stops forcing one or more players to be
 * a specified hero. This will not respawn
 * the player or players, but it will restore
 * their availablity the next time they go
 * to select a hero.
 */
export const stopForcingPlayerToBeHero = (
	/**
	 * Player - The player or players who will
	 * no longer be forced to be a specific hero.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Stop Forcing Player To Be Hero(${player})`
}