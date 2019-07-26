/**
 * Sets the score (kill count) of one or more
 * players. This action only has an effect
 * in free-for-all modes.
 */
export const setPlayerScore = (
	/**
	 * Player - The player or players whose score
	 * will be set. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Team - The team or teams whose score will
	 * be set. Can use most Team based Value Syntax for this value.
	 * - `Type.Number.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	score: string | number | any[]
) => {

	return `Set Player Score(${player}, ${score})`
}