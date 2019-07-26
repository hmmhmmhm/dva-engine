/**
 * Whether the specified team is currently
 * on defense in a standard match.
 */
export const isTeamOnDefense = (
	/**
	 * Team - The team whose role to check. Can
	 * use most Team Based Value Syntax to retrieve this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Team On Defense(${team})`
}