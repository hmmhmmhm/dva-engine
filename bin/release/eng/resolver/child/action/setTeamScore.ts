/**
 * Sets the score for one or both teams. This
 * action has no effect in free-for-all modes
 * or modes without a team score.
 */
export const setTeamScore = (
	/**
	 * Score - The score that will be set. Can
	 * use most Number based Value Syntax for this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * Team - The team or teams whose score will
	 * be set. Can use most Team based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string | number | any[]
) => {

	return `Set Team Score(${team}, ${score})`
}