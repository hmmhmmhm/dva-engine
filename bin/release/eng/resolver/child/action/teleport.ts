/**
 * Teleports one or more players to the specified location.
 */
export const teleport = (
	/**
	 * Player - The player or players to teleport.
	 * Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Position - The position to which the player
	 * or players will teleport. If a player is
	 * providedm the position of the player is
	 * used. Can use most Vector based Value Syntax.
	 * - `Type.Vector.`
	 */
	position: string | number | any[]
) => {

	return `Teleport(${player}, ${position})`
}