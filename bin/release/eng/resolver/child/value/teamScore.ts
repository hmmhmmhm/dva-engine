/**
 * The current score for the specified team.
 * Results in a 0 in free-for-all game modes.
 */
export const teamScore = (
	/**
	 * Team - The team whose score to acquire.
	 * Can use most Team based Value Syntax to
	 * provide this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[]
): number => {

	// @ts-ignore
	return `Team Score(${team})`
}

