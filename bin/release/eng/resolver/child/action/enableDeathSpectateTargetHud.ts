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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate Target Hud(${player})`
}