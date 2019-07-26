/**
 * Undoes the effect of the disable built-in
 * game mode respawning for one or more players.
 */
export const enableBuiltInGameModeRespawning = (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.`
	 */
	players: string | number | any[]
) => {

	return `Enable Built In Game Mode Respawning(${players})`
}