/**
 * 지정된 팀을 승자로 하여 경기를 즉시 종료합니다.
 * 이 액션은 개별 전투 모드에서는 효과가 없습니다.
 */
export const declareTeamVictory = (
	/**
	 * 이긴 팀입니다.
	 * - `Team.` 또는 `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Declare Team Victory(${team})`
}