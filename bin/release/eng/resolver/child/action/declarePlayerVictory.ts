/**
 * Instantly ends the match with the specific
 * player as the winner. This action only has
 * an effect in free-for-all modes.
 */
export const declarePlayerVictory = (
	/**
	 * Player - The winning player. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Declare Player Victory(${player})`
}