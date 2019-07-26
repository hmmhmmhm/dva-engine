/**
 * Whether a specific team's flag is being
 * is being carried by a member of the opposing
 * team in capture the flag.
 */
export const isFlagBeingCarried = (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Flag Being Carried(${team})`
}