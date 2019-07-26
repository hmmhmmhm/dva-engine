/**
 * Undoes the effect of start forcing throttle
 * action for one or more players
 */
export const stopForcingThrottle = (
	/**
	 * Player - The player or players whose movement
	 * inout will be restored. Can use most Player
	 * based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop Forcing Throttle(${player})`
}