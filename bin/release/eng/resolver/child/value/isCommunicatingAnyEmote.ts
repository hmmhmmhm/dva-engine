/**
 * Whether a player is using a emote.
 */
export const isCommunicatingAnyEmote = (
	/**
	 * Player - The player whose emoting status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Emote(${player})`
}