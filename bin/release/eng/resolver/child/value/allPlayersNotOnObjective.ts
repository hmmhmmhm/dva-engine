/**
 * An array containing all players occupying
 * neither a payload nor a control point (either
 * on a team or in a match).
 */
export const allPlayersNotOnObjective = (
	/**
	 * Team - You can specify any Team Syntax to
	 * define the array.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): any[] => {

	// @ts-ignore
	return `All Players Not On Objective(${team})`
}

