/**
 * Starts accelerating one or more players
 * in a specified location.
 */
export const startAccelerating = (
	/**
	 * Player - The player or players that will
	 * begin accelerating. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Direction - The unit direction in which
	 * the acceleration will be applied. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.`
	 */
	direction: string | number | any[],
	/**
	 * Rate - The rate of acceleration in meters
	 * per second squared. This value may need
	 * to be quite high in order to overcome gravity
	 * and/or surface friction. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.`
	 */
	rate: string | number | any[],
	/**
	 * Max Speed - The speed at which acceleration
	 * will stop for the player or players. It
	 * may not be possible to reach this speed
	 * due to gravity and/or surface friction.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	maxSpeed: string | number | any[],
	/**
	 * Relative - Specifies whether direction is
	 * relavtive to the world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Relative.`
	 */
	relative: string | number | any[],
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.StartAcceleratingReevaluation.`
	 */
	reevaluation: string | number | any[]
) => {

	return `Start Accelerating(${player}, ${direction}, ${rate}, ${maxSpeed}, ${relative}, ${reevaluation})`
}