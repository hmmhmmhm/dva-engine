/**
 * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
 */
export const declareTeamVictory = (
	/**
	 * 이긴 팀입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Declare Team Victory(${team})`
}