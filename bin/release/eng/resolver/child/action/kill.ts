/**
 * Instantly kills one or more players.
 */
export const kill = (
	/**
	 * Player - The player or players who will
	 * be killed. Can use most Player based Value
	 * Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[],
	/**
	 * Killer - The player who will receive credit
	 * for the kill. A killer of null indicates
	 * no player will receive credit. Can use most
	 * Player based Value Syntax for this value.
	 * - `Type.AssisterParam.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	killer: string | number | any[]
) => {

	return `Kill(${player}, ${killer})`
}