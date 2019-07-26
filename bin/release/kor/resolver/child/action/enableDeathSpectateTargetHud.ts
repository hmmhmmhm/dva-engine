/**
 * 사망 후 관전 시
 * 플레이어 자신의 HUD 대신
 * 관전 대상의 HUD를 볼 수 있습니다.
 */
export const enableDeathSpectateTargetHud = (
	/**
	 * 사망 후 관전 시
	 * 대상의 관전 대상의
	 * HUD를 보게 될
	 * 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate Target Hud(${player})`
}