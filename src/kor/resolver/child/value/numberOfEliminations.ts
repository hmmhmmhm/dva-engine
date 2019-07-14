/**
 * 지정된 플레이어가 기록한 처치 수입니다.
 * 이 값은 게임이 진행 중일 때만 누적됩니다.
 */
export const numberOfEliminations = (
	/**
	 * 처치 횟수 정보를 가져올 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string
) => {

	return `Number Of Eliminations(${player})`
}