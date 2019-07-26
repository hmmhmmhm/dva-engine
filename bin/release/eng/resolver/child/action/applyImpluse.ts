/**
 * Applies an instantaneous change in velocity
 * to the movement of one or more players.
 */
export const applyImpluse = (
	/**
	 * Player - The player or players whose velocity
	 * will be changed. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Direction - The unit direction in which
	 * the impulse will be applied. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[],
	/**
	 * Speed - The magnitude of the change to the
	 * velocities of the player or players. Can
	 * use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	speed: string | number | any[],
	/**
	 * Relative - Specifies whether the direction
	 * is relative to world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Relative.`
	 */
	relative: string | number | any[],
	/**
	 * To World - Relative to the world’s coordinate system.
	 * - `Type.Motion.`
	 */
	motion: string | number | any[]
) => {

	return `Apply Impluse(${player}, ${direction}, ${speed}, ${relative}, ${motion})`
}