/**
 * Restores the list of heroes available to
 * one or more players to the list specified
 * by the game settings. If a player’s current
 * hero becomes unavailable, the player is
 * forced to choose a different hero and respawn
 * at an appropriate spawn location.
 */
export const resetPlayerHeroAvailability = (
	/**
	 * Player - The player or players whose hero
	 * list is being reset. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Reset Player Hero Availability(${player})`
}