/**
 * The directional input of a player, represented
 * by a vector with a horizontal input on the
 * X component (positive to the left) and vertical
 * input on the Z component (positive upward).
 */
export const throttleOf = (
	/**
	 * Player - The player whose directional input
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Throttle Of(${player})`
}

