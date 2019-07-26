/**
 * Whether the specified team is currently
 * on offense in a standard match.
 */
export const isTeamOnOffense = (
	/**
	 * Team - The team whose role to check. Can
	 * use most Team Based Value Syntax to retrieve this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Team On Offense(${team})`
}