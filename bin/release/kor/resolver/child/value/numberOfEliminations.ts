/**
 * 지정된 플레이어가 기록한 처치 수입니다.
 * 이 값은 게임이 진행 중일 때만 누적됩니다.
 */
export const numberOfEliminations = (
	/**
	 * 처치 횟수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Eliminations(${player})`
}

