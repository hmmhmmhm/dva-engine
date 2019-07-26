/**
 * The position of a player's first person
 * view (used for aiming)
 */
export const eyePosition = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Eye Position(${player})`
}

