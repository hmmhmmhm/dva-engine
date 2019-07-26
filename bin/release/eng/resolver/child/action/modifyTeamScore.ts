/**
 * Modifies the score of one or both teams.
 * This action has not effect in free-for-all
 * modes or modes without a team score.
 */
export const modifyTeamScore = (
	/**
	 * Score - The amount the score will increase
	 * or decrease. If positive, the score will
	 * increase. If negative, the score will decrease.
	 * Can use most Number based Value Syntax for this value.
	 * - `Type.Team.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	team: string | number | any[],
	/**
	 * Team - The team whose score will be changed.
	 * Can use most Player based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string | number | any[]
) => {

	return `Modify Team Score(${team}, ${score})`
}