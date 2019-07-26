/**
 * Instantly ends the match with the specified
 * team as the winner. This action has no effect
 * in free-for-all modes.
 */
export const declareTeamVictory = (
	/**
	 * Team - The winning team. Can use most Team
	 * based Value Syntax for this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
) => {

	return `Declare Team Victory(${team})`
}