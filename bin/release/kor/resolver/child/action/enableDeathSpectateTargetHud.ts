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
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate Target Hud(${player})`
}