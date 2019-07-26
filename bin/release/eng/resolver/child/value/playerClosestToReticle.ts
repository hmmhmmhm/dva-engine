/**
 * The player closest to the reticle of the
 * specified player, optionally restricted by team.
 */
export const playerClosestToReticle = (
	/**
	 * Player - The player from whose reticle to
	 * search for the closest player. Can use most
	 * Player based Value Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Team - The team or teams on which to search
	 * for the closest player. Can use most Team
	 * based Value Syntax to provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Player Closest To Reticle(${player}, ${team})`
}