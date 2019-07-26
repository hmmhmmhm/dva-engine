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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Hero - The hero or heroes that will be available.
	 * If no heroes are provided, the action has
	 * no effect. Can use most Hero based Value
	 * Syntax for this value including compatible Arrays.
	 * - `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string | number | any[]
) => {

	return `Set Player Allowed Heroes(${player}, ${hero})`
}