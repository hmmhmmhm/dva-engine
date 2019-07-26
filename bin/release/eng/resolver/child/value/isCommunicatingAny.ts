/**
 * Whether a player is using any communication
 * type (such as emoting, using a voice line, etc.)
 */
export const isCommunicatingAny = (
	/**
	 * Player - The player whose communication
	 * status to check. Can use most player based
	 * Value Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any(${player})`
}