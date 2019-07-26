/**
 * Determines whether a player is alive. Returns
 * a Boolean value.
 */
export const isAlive = (
	/**
	 * Player - The player whose life to check.
	 * Can use most player based Value Syntax to
	 * retrive this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Is Alive(${player})`
}