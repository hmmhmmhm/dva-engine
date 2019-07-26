/**
 * Clears a status that was applied from a
 * set status action from one or more players.
 */
export const clearStatus = (
	/**
	 * Player - The player or players from whom
	 * the status will be removed. Can use most
	 * Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Status - The Status to be removed from the
	 * player or players. Values include Hacked,
	 * Burning, Knocked Down, Asleep, Frozen, Unkillable,
	 * Invincible, Phased Out, Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status: string | number | any[]
) => {

	return `Clear Status(${player}, ${status})`
}