/**
 * Sets the facing of one or more players to
 * the specified direction.
 */
export const setFacing = (
	/**
	 * Player - The player or players whose facing
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Direction - The unit direction in which
	 * the player or players will face. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[]
) => {

	return `Set Facing(${player}, ${direction})`
}