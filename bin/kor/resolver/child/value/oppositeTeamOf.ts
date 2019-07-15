/**
 * 지정된 팀의 상대 팀입니다.
 */
export const oppositeTeamOf = (
	/**
	 * 상대 팀 정보를 가져올 팀입니다.
	 * ALL인 경우, 결과는 ALL입니다.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string
) => {

	return `Opposite Team Of(${team})`
}