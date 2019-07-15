/**
 * 해당 플레이어의 소속 팀입니다.
 * 게임 모드가 개별 전투인 경우 팀은 ALL로 간주됩니다.
 */
export const teamOf = (
	/**
	 * 팀 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Team Of(${player})`
}