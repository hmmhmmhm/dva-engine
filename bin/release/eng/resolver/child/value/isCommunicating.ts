/**
 * Whether a player is using a specific communication
 * type (such as emote, using a voice line, etc.).
 */
export const isCommunicating = (
	/**
	 * Player - The player whose communication
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Type - The type of communication to consider.
	 * The duration of emotes is exact, the duration
	 * of voice lines is assumed to be 4 seconds,
	 * and all other durations are assumed to be
	 * 2 seconds. Any of the four emote slots,
	 * four voice lines slots, or any standard
	 * communication (Need healing, Ultimate Status,
	 * etc.) can be designated.
	 * - `Type.Communication.`
	 */
	type: string | number | any[]
) => {

	return `Is Communicating(${player}, ${type})`
}