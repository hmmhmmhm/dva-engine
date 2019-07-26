/**
 * The current health of a player including
 * armor and shields.
 */
export const health = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Health(${player})`
}

