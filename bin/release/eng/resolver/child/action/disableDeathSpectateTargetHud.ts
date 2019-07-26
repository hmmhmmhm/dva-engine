/**
 * Undoes the effect of the enable death spectate
 * target hud action for one or more players.
 */
export const disableDeathSpectateTargetHud = (
	/**
	 * Player - The player or players who will
	 * revert to seeing their own HUD while death
	 * spectating. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Disable Death Spectate Target Hud(${player})`
}