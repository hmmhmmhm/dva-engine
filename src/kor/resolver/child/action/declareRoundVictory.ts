/**
 * 팀 하나를 현재 라운드의 승자로 설정합니다.
 * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
 */
export const declareRoundVictory = (
	/**
	 * 라운드에서 승리한 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	roundWinningTeam: string
) => {

	return `Declare Round Victory(${roundWinningTeam})`
}