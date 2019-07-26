/**
 * Whether a player is using a voice line.
 * (The duration of a voice line is assumed
 * to be 4 seconds.)
 */
export const isCommunicatingAnyVoiceLine = (
	/**
	 * Player - The player whose voice line status
	 * to check. Can use most player based Value
	 * Syntax to retrieve this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Is Communicating Any Voice Line(${player})`
}