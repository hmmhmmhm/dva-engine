/**
 * The vertical angle in degrees from a player’s
 * current forward direction to the specified
 * position. The result is positive if the
 * position is below the player. Otherwise,
 * the result is zero or negative.
 */
export const verticalAngleTowards = (
	/**
	 * Position - The direction vector from which
	 * to acquire a vertical angle in degrees.
	 * The vector is unitized before calculations
	 * begins. Can use most Vector based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Position - The player whose current facing
	 * the angle begins. Can use most Player based
	 * Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	position: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Angle Towards(${player}, ${position})`
}

