/**
 * Whether a player is on a wall (climbing or riding).
 */
export const isOnWall = (
	/**
	 * Player - The player whose wall status to
	 * check. Can use most player based Value Syntax
	 * to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is On Wall(${player})`
}