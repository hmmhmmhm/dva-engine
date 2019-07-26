/**
 * The current speed of a player in a specific
 * direction in meters per second.
 */
export const speedOfInDirection = (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Direction - The direction of travel in which
	 * to measure the player’s speed. Can use most
	 * Vector based Value Syntax to provide this value.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	direction: string | number | any[]
): number => {

	// @ts-ignore
	return `Speed Of In Direction(${player}, ${direction})`
}

