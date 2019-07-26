/**
 * 지정된 플레이어를 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서만 효과가 있습니다.
 */
export const declarePlayerVictory = (
	/**
	 * 이긴 플레이어입니다.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
) => {

	return `Declare Player Victory(${player})`
}