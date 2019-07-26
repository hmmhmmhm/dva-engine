/**
 * The team opposite the specified team.
 */
export const oppositeTeamOf = (
	/**
	 * Team - The team whose opposite to acquire.
	 * If all, the result will be all. Can use
	 * most Team based Value Syntax to provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Opposite Team Of(${team})`
}