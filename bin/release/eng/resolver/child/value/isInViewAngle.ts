/**
 * Whether a location is within view of a player.
 */
export const isInViewAngle = (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Location - The location to test if it’s
	 * within view. Most positional based Value
	 * Syntax can be used here.
	 * - `Type.Vector.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	location: string | number | any[],
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	viewAngle: string | number | any[]
) => {

	return `Is In View Angle(${player}, ${location}, ${viewAngle})`
}