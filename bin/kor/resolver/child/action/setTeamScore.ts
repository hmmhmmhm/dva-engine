/**
 * 한 팀 또는 두 팀
 * 모두의 점수를 설정합니다.
 * 이 액션은 개별
 * 전투 모드나 팀 점수가
 * 존재하지 않는
 * 모드에서는 효과가 없습니다.
 */
export const setTeamScore = (
	/**
	 * 점수를 설정할 팀입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * 설정할 점수입니다.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string | number | any[]
) => {

	return `Set Team Score(${team}, ${score})`
}