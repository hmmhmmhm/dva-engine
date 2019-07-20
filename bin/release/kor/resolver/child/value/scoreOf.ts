/**
 * 지정된 플레이어의 현재 점수입니다.
 * 게임 모드가 개별 전투가 아닌 경우
 * 결과값은 0이 됩니다.
 */
export const scoreOf = (
	/**
	 * 점수 정보를 가져올 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Score Of(${player})`
}

