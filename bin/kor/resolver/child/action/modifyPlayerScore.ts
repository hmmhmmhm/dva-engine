/**
 * 플레이어의 점수(처치수)를 수정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
export const modifyPlayerScore = (
	/**
	 * 점수를 수정할 플레이어입니다.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string,
	/**
	 * 점수 증감량입니다.
	 * 양수인 경우 점수가 오르고
	 * 음수인 경우 감소합니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string
) => {

	return `Modify Player Score(${player}, ${score})`
}