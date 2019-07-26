/**
 * 지정된 팀의 상대 팀입니다.
 */
export const oppositeTeamOf = (
	/**
	 * 상대 팀 정보를 가져올 팀입니다.
	 * ALL인 경우, 결과는 ALL입니다.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Opposite Team Of(${team})`
}