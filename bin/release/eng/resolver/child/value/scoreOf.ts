/**
 * The current score of a player. Results in
 * 0 if the game mode is not free-for-all.
 */
export const scoreOf = (
	/**
	 * Player - The player whose score to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Score Of(${player})`
}

