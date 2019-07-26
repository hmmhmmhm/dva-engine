/**
 * The array of players playing a specific
 * hero on a team or in the match.
 */
export const playersOnHero = (
	/**
	 * Hero - The hero to check for play. Can use
	 * most Hero based Value Syntax to provide this value.
	 * - `Type.Hero.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	hero: string | number | any[],
	/**
	 * Team - The team or teams on which to check
	 * for the hero being played. Can use most
	 * Team based Value Syntax to provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Players On Hero(${hero}, ${team})`
}

