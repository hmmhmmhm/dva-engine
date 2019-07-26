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
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Disable Death Spectate Target Hud(${player})`
}