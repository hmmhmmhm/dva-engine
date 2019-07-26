/**
 * The position of a player's first person
 * view (used for aiming)
 */
export const eyePosition = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Eye Position(${player})`
}

