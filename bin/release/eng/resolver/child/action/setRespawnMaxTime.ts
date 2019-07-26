/**
 * Sets the duration between death and respawn
 * for one or more players that are already
 * dead when this action is executed, the change
 * takes effect on their next death.
 */
export const setRespawnMaxTime = (
	/**
	 * Player - The player or players whose respawn
	 * max time will is being defined. Can use
	 * most Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Time - The duration between death and respawn
	 * in seconds. Can use most Number based Value
	 * Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	time: string | number | any[]
) => {

	return `Set Respawn Max Time(${player}, ${time})`
}