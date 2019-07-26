/**
 * The unit-length directional vector of a
 * player’s current facing relative to the
 * world. This value includes both horizontal
 * and vertical facing.
 */
export const facingDirectionOf = (
	/**
	 * - `Type.Player.` 를 입력하면 
	 *   여기서 사용 가능한 함수를 확인할 수 있습니다.
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Facing Direction Of(${player})`
}

