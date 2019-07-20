/**
 * 플레이어 사망 시,
 * 아군뿐 아니라 모든 플레이어를
 * 관전할 수 있도록 허용합니다.
 */
export const enableDeathSpectateAllPlayers = (
	/**
	 * 모든 플레이어를
	 * 관전할 수 있도록
	 * 허용된 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Enable Death Spectate All Players(${player})`
}