/**
 * Respawns one or more players at an appropriate
 * spawn location with full health, even if
 * they were already alive.
 */
export const respawn = (
	/**
	 * Player - The player or players to respawn.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Respawn(${player})`
}