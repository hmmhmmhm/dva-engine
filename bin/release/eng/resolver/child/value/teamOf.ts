/**
 * The team of a player. If the game mode is
 * free-for-all, the team is considered to be all.
 */
export const teamOf = (
	/**
	 * Player - The player whose team to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Team Of(${player})`
}