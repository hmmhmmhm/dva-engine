/**
 * The number of eliminations a specific player
 * has earned. This value only accumulates
 * while a game is in progress.
 */
export const numberOfEliminations = (
	/**
	 * Player - The player whose elimination count
	 * to acquire. Can use most Player based Value
	 * Syntax to provide this value.
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Number Of Eliminations(${player})`
}

