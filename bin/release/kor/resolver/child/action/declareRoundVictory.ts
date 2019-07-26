/**
 * 팀 하나를 현재 라운드의 승자로 설정합니다.
 * 쟁탈 및 섬멸전 게임 모드에서만 작동합니다.
 */
export const declareRoundVictory = (
	/**
	 * 라운드에서 승리한 팀입니다.
	 * - `Type.Team.`
	 */
	roundWinningTeam: string | number | any[]
) => {

	return `Declare Round Victory(${roundWinningTeam})`
}