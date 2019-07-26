/**
 * The player’s current height in meters above
 * a surface. Results in a 0 whenever the place
 * is on a surface.
 */
export const altitudeOf = (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Altitude Of(${player})`
}

