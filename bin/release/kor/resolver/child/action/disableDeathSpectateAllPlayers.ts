/**
 * 플레이어에 대한
 * ENABLE DEATH SPECTATE ALL PLAYERS
 * 액션의 효과를 취소합니다.
 */
export const disableDeathSpectateAllPlayers = (
	/**
	 * 사망 후 관전 설정 기본값을
	 * 복원할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Disable Death Spectate All Players(${player})`
}