/**
 * The array of players playing a specific
 * hero on a team or in the match.
 */
export const playersOnHero = (
	/**
	 * Hero - The hero to check for play. Can use
	 * most Hero based Value Syntax to provide this value.
	 * - `Type.Hero.`
	 */
	hero: string | number | any[],
	/**
	 * Team - The team or teams on which to check
	 * for the hero being played. Can use most
	 * Team based Value Syntax to provide this value.
	 * - `Type.Team.`
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players On Hero(${hero}, ${team})`
}

