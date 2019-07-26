/**
 * Clears a status that was applied from a
 * set status action from one or more players.
 */
export const clearStatus = (
	/**
	 * Player - The player or players from whom
	 * the status will be removed. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Status - The Status to be removed from the
	 * player or players. Values include Hacked,
	 * Burning, Knocked Down, Asleep, Frozen, Unkillable,
	 * Invincible, Phased Out, Rooted, or Stunned.
	 * - `Type.Status.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	status: string | number | any[]
) => {

	return `Clear Status(${player}, ${status})`
}