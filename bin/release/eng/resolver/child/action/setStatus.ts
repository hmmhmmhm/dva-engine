/**
 * Applies a status to one or more players.
 * This status will remain in effect for the
 * specified duration or until it is cleared
 * by the clear status action.
 */
export const setStatus = (
	/**
	 * Player - The player or players to whom the
	 * status will be applied. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Assister - Specifies a player to be awarded
	 * assist credit should the affected player
	 * or players be killed while the status is
	 * in effect. An assister of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.AssisterParam.`
	 */
	assister: string | number | any[],
	/**
	 * Status - The Status to be applied from the
	 * player or players. These behave similarly
	 * to statuses applied from hero abilities.
	 * Values include Hacked, Burning, Knocked
	 * Down, Asleep, Frozen, Unkillable, Invincible,
	 * Phased Out, Rooted, or Stunned.
	 * - `Type.Status.`
	 */
	status: string | number | any[],
	/**
	 * Duration - The duration of the status effect
	 * in seconds. To have a status that lasts
	 * until a clear status action is executed,
	 * proivide an arbitrarily long duration such
	 * as 9999. Can use most Number based Value Syntax.
	 * - `Type.Number.`
	 */
	duration: string | number | any[]
) => {

	return `Set Status(${player}, ${assister}, ${status}, ${duration})`
}