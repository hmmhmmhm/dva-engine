/**
 * Modifies the value of a player variable,
 * which is a variable that belongs to a specific player.
 */
export const modifyPlayerVariable = (
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Player.`
	 */
	player: string | number | any[],
	/**
	 * Operation - The way in which the variable’s
	 * value will be changed. Options include standard
	 * arithmetic operations as well as array operations
	 * for appending and removing values.
	 * - `Type.IPlayer.`
	 */
	variable: string | number | any[],
	/**
	 * Variable - Variable specified by a single
	 * alphabetic letter (A through Z).
	 * - `Type.Variable.`
	 */
	operation: string | number | any[],
	/**
	 * Value - The value used for the modification.
	 * For arithmetic operations, this is the second
	 * of two operands, with the other being the
	 * variable’s existing value. For array operations,
	 * this is the value to append or remove. Various
	 * Value Syntax can be used.
	 * - `Type.Value.`
	 */
	value: string | number | any[]
) => {

	return `Modify Player Variable(${player}, ${variable}, ${operation}, ${value})`
}