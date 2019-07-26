/**
 * The position of a specific team’s flag in
 * Capture the Flag.
 */
export const flagPosition = (
	/**
	 * Team - The team whose flag position to acquire.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Flag Position(${team})`
}

