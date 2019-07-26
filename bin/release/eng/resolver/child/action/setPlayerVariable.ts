/**
 * Stores a value into a player variable, which
 * is a variable that belongs to a specific player.
 */
export const setPlayerVariable = (
	/**
	 * Variable - Specifies which Player Variable
	 * to store the value into. Specified by a
	 * single alphabetic letter (A through Z).
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Value - The value that will be stored. Nearly
	 * any Value syntax can be used, however it
	 * is most common with Number based syntax.
	 * - `Type.Variable.`
	 */
	variable: string | number | any[],
	/**
	 * Player - The player or players whose variable
	 * will be set. If multiple players are provided,
	 * each of their variables will be set. Can
	 * use most Player based Value Syntax for this value.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Set Player Variable(${player}, ${variable}, ${value})`
}