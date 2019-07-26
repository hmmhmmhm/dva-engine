/**
 * Instantly resurrects one or more players
 * at the location they died with no transition.
 */
export const resurrect = (
	/**
	 * Player - The player or players who will
	 * be resurrected. Can use most Player based
	 * Value Syntax for this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
) => {

	return `Resurrect(${player})`
}