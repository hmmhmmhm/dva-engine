/**
 * 플레이어의 점수
 * (처치수)를 설정합니다.
 * 이 액션은 개별 전투
 * 모드에서만 효과가 있습니다.
 */
export const setPlayerScore = (
	/**
	 * 점수를 설정할 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * 설정할 점수입니다.
	 * - `Type.Number.`
	 */
	score: string | number | any[]
) => {

	return `Set Player Score(${player}, ${score})`
}