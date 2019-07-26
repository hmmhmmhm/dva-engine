/**
 * Sets the list of heroes available to one
 * or more players. If a player’s current hero
 * becomes unavailable, the player is forced
 * to choose a different hero and respawn at
 * an appropriate spawn location.
 */
export const setPlayerAllowedHeroes = (
	/**
	 * Player - The player or players whose hero
	 * list is being set. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Hero - The hero or heroes that will be available.
	 * If no heroes are provided, the action has
	 * no effect. Can use most Hero based Value
	 * Syntax for this value including compatible Arrays.
	 * - `Type.Hero.`
	 */
	hero: string | number | any[]
) => {

	return `Set Player Allowed Heroes(${player}, ${hero})`
}