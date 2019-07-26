/**
 * The players who are within a specific view
 * angle of a specific player’s reticle, optionally
 * restricted by team.
 */
export const playersInViewAngle = (
	/**
	 * Player - The player whose view to use for
	 * the check. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * View Angle - The view angle to compare against
	 * in degrees. Can use most Angle based Value
	 * Syntax to provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * Team - The team or teams on which to consider
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	viewAngle: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players In View Angle(${player}, ${team}, ${viewAngle})`
}

