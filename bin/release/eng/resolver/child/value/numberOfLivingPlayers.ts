/**
 * The number of living players on a team or in the match.
 */
export const numberOfLivingPlayers = (
	/**
	 * Team - The team or teams on which to count
	 * players. Can use most Team based Value Syntax
	 * to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Living Players(${team})`
}

