/**
 * 플레이어가 벽에 있는 상태(오르거나 타는 상태)인지 여부입니다.
 */
export const isOnWall = (
	/**
	 * 벽 상태를 확인할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Is On Wall(${player})`
}