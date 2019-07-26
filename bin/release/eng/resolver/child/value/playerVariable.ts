/**
 * The current value of a player variable,
 * which is a variable that belongs to a specific player.
 */
export const playerVariable = (
	/**
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * - `Type.Variable.`
	 */
	variable: string | number | any[]
): any[] => {

	// @ts-ignore
	return `Player Variable(${player}, ${variable})`
}

