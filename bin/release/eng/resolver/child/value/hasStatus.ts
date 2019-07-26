/**
 * Whether the specified player has the specified
 * status, either from the set status action
 * or from a non-scripted game mechanic.
 */
export const hasStatus = (
	/**
	 * Player - The player whose status to check.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Status - The status to check for. Values
	 * include Hacked, Burning, Knocked Down, Asleep,
	 * Frozen, Unkillable, Invincible, Phased Out,
	 * Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status: string | number | any[]
) => {

	return `Has Status(${player}, ${status})`
}