/**
 * Disables automatic respawning for one or
 * more players, only allowing respawning by
 * scripting commands.
 */
export const disableBuiltInGameModeRespawning = (
	/**
	 * Player - The player or players whose respawning
	 * is affected. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.PlayersParam.`
	 */
	players: string | number | any[]
) => {

	return `Disable Built In Game Mode Respawning(${players})`
}