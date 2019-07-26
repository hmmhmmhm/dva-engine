/**
 * The array of heroes from which the specified
 * player is currently allowed to select.
 */
export const allowedHeroes = (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Allowed Heroes(${player})`
}

