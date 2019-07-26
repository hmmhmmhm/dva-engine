/**
 * Stops the turning started by the start facing
 * action for or one or more players.
 */
export const stopFacing = (
	/**
	 * Player - The player or players who will
	 * stop turning. Can use most Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Stop Facing(${player})`
}