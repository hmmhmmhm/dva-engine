/**
 * Undoes the effect of the enable death spectate
 * all players action for one or more players.
 */
export const disableDeathSpectateAllPlayers = (
	/**
	 * Player - The player or players whose default
	 * death spectate behavior is restored. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Disable Death Spectate All Players(${player})`
}