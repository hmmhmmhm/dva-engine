/**
 * Allows one or more players to see their
 * target’s HUD when dead instead of their
 * own while death spectating.
 */
export const enableDeathSpectateTargetHud = (
	/**
	 * Player - The player or players who will
	 * begin seeing their spectate’s target’s hud
	 * while death spectating. Can use most Player
	 * based Value Syntax for this value.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate Target Hud(${player})`
}