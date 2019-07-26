/**
 * The current health of a player including
 * armor and shields.
 */
export const health = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): number => {

	// @ts-ignore
	return `Health(${player})`
}

