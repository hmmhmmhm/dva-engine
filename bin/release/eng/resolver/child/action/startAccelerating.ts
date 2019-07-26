/**
 * Starts accelerating one or more players
 * in a specified location.
 */
export const startAccelerating = (
	/**
	 * Player - The player or players that will
	 * begin accelerating. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Direction - The unit direction in which
	 * the acceleration will be applied. This value
	 * is normalized internally. Can use most Vector
	 * based Value Syntax to specify.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[],
	/**
	 * Rate - The rate of acceleration in meters
	 * per second squared. This value may need
	 * to be quite high in order to overcome gravity
	 * and/or surface friction. Can use most Number
	 * based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	rate: string | number | any[],
	/**
	 * Max Speed - The speed at which acceleration
	 * will stop for the player or players. It
	 * may not be possible to reach this speed
	 * due to gravity and/or surface friction.
	 * Can use most Number based Value Syntax.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	maxSpeed: string | number | any[],
	/**
	 * Relative - Specifies whether direction is
	 * relavtive to the world coordinates or the
	 * local coordinates of the player or players.
	 * - `Type.Relative.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	relative: string | number | any[],
	/**
	 * Player - The player or players who will
	 * start turning. Can use most Player based Value Syntax.
	 * - `Type.StartAcceleratingReevaluation.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	reevaluation: string | number | any[]
) => {

	return `Start Accelerating(${player}, ${direction}, ${rate}, ${maxSpeed}, ${relative}, ${reevaluation})`
}