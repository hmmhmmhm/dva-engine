/**
 * Whether the specified player has the specified
 * status, either from the set status action
 * or from a non-scripted game mechanic.
 */
export const hasStatus = (
	/**
	 * Player - The player whose status to check.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Status - The status to check for. Values
	 * include Hacked, Burning, Knocked Down, Asleep,
	 * Frozen, Unkillable, Invincible, Phased Out,
	 * Rooted, or Stunned.
	 * - `Type.Status.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	status: string | number | any[]
) => {

	return `Has Status(${player}, ${status})`
}