/**
 * Allows one or more players to spectate all
 * players when dead, as opposed to only allies.
 */
export const enableDeathSpectateAllPlayers = (
	/**
	 * Player - The player or players who will
	 * be allowed to spectate all players. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate All Players(${player})`
}