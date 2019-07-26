/**
 * Teleports one or more players to the specified location.
 */
export const teleport = (
	/**
	 * Player - The player or players to teleport.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Position - The position to which the player
	 * or players will teleport. If a player is
	 * providedm the position of the player is
	 * used. Can use most Vector based Value Syntax.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[]
) => {

	return `Teleport(${player}, ${position})`
}