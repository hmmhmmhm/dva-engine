/**
 * The unit-length directional vector of a
 * player’s current facing relative to the
 * world. This value includes both horizontal
 * and vertical facing.
 */
export const facingDirectionOf = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Facing Direction Of(${player})`
}

