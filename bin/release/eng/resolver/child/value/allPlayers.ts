/**
 * An array containing all players on a team in a match.
 */
export const allPlayers = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players(${team})`
}

