/**
 * 플레이어를 대상으로
 * ENABLE DEATH SPECTATE TARGET HUD
 * 액션의 효과를 취소합니다.
 */
export const disableDeathSpectateTargetHud = (
	/**
	 * 사망 후 관전 시 자신의 HUD를
	 * 다시 보게 될 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Disable Death Spectate Target Hud(${player})`
}