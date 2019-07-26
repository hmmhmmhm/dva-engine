/**
 * Causes one or more players to use an emote,
 * voice line, or other equipped communication.
 */
export const communicate = (
	/**
	 * Player - The player or players to perform
	 * the communication. Can use most Player based Value Syntax.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Type - The type of communication. Can use
	 * any equipped emote, equipped voice line,
	 * or any other communication effect.
	 * - `Type.Communication.`
	 */
	type: string | number | any[]
) => {

	return `Communicate(${player}, ${type})`
}