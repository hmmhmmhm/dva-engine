/**
 * Sets the facing of one or more players to
 * the specified direction.
 */
export const setFacing = (
	/**
	 * Player - The player or players whose facing
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Direction - The unit direction in which
	 * the player or players will face. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[]
) => {

	return `Set Facing(${player}, ${direction})`
}