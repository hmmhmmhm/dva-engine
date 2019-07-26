/**
 * Whether the specified team is currently
 * on offense in a standard match.
 */
export const isTeamOnOffense = (
	/**
	 * Team - The team whose role to check. Can
	 * use most Team Based Value Syntax to retrieve this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Is Team On Offense(${team})`
}