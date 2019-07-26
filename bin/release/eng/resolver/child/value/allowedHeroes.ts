/**
 * The array of heroes from which the specified
 * player is currently allowed to select.
 */
export const allowedHeroes = (
	/**
	 * Player - You can specify any Player Syntax
	 * to define the array.
	 * - `Type.Player.`
	 */
	player: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Allowed Heroes(${player})`
}

