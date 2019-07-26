/**
 * The current speed of a player in meters per second.
 */
export const speedOf = (
	/**
	 * Player - The player whose velocity to acquire.
	 * Can use most Player based Value Syntax to
	 * provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Speed Of(${player})`
}

