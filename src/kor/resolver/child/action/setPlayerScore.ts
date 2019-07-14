/**
 * 플레이어의 점수
 * (처치수)를 설정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
export const setPlayerScore = (
	/**
	 * 점수를 설정할 플레이어입니다.
	 * - `Player.` 또는 `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 설정할 점수입니다.
	 * - `Number.` 또는 `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string
) => {

	return `Set Player Score(${player}, ${score})`
}