/**
 * The current vertical speed of a player in
 * meters per second. This measurement excludes
 * all horizontal motion, including motion
 * while traveling up and down slopes.
 */
export const verticalSpeedOf = (
	/**
	 * Player - The player whose vertical speed
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Vertical Speed Of(${player})`
}

