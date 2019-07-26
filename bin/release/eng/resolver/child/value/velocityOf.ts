/**
 * The current velocity of a player as a vector.
 * If the player is on a surface, the Y component
 * of this velocity will be 0m even when traveling
 * up or down a slope.
 */
export const velocityOf = (
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
	return `Velocity Of(${player})`
}

