/**
 * Whether a specific player is moving (as
 * defined by having a non-zero constant speed).
 */
export const isMoving = (
	/**
	 * Player - The player whose moving status
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Moving(${player})`
}