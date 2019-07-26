/**
 * Whether a player is on the ground (or other
 * walkable surface).
 */
export const isOnGround = (
	/**
	 * Player - The player whose ground status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is On Ground(${player})`
}