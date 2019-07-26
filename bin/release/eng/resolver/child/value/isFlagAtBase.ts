/**
 * Whether a specific team’s flag is at its
 * base in capture the flag.
 */
export const isFlagAtBase = (
	/**
	 * Team - The team whose whose flag to check.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
) => {

	return `Is Flag At Base(${team})`
}